"use server";

// MODELS
import User from "@/lib/db/models/user.model";
import Event from "@/lib/db/models/event.model";
import Order from "@/lib/db/models/order.model";

// NEXT
import { revalidatePath } from "next/cache";

// TYPES
import { CreateUserParams, UpdateUserParams } from "@/types";

// UTILS
import { connectDB } from "@/lib/db";
import { handleError } from "@/lib/utils";

export const createUser = async (user: CreateUserParams) => {
  try {
    await connectDB();

    const newUser = await User.create(user);

    return JSON.parse(JSON.stringify(newUser));
  } catch (err) {
    console.log(err);
  }
};

export async function updateUser(clerkId: string, user: UpdateUserParams) {
  try {
    await connectDB();

    const updatedUser = await User.findOneAndUpdate({ clerkId }, user, {
      new: true,
    });

    if (!updatedUser) throw new Error("User update failed");
    return JSON.parse(JSON.stringify(updatedUser));
  } catch (error) {
    handleError(error);
  }
}

export async function deleteUser(clerkId: string) {
  try {
    await connectDB();

    // Find user to delete
    const userToDelete = await User.findOne({ clerkId });

    if (!userToDelete) {
      throw new Error("User not found");
    }

    // Unlink relationships
    await Promise.all([
      // Update the 'events' collection to remove references to the user
      Event.updateMany(
        { _id: { $in: userToDelete.events } },
        { $pull: { organizer: userToDelete._id } },
      ),

      // Update the 'orders' collection to remove references to the user
      Order.updateMany(
        { _id: { $in: userToDelete.orders } },
        { $unset: { buyer: 1 } },
      ),
    ]);

    // Delete user
    const deletedUser = await User.findByIdAndDelete(userToDelete._id);
    revalidatePath("/");

    return deletedUser ? JSON.parse(JSON.stringify(deletedUser)) : null;
  } catch (error) {
    handleError(error);
  }
}
