"use server";

// MODELS
import User from "@/lib/db/models/user.model";
import Event from "@/lib/db/models/event.model";

// UTILS
import { connectDB } from "@/lib/db";
import { handleError } from "@/lib/utils";

// TYPES
import { CreateEventParams } from "@/types";

export const createEvent = async ({
  event,
  userId,
  path,
}: CreateEventParams) => {
  try {
    await connectDB();

    const organizer = await User.findById(userId);

    if (!organizer) {
      throw new Error("User not found");
    }

    const newEvent = await Event.create({
      ...event,
      category: event.categoryId,
      organizer: userId,
    });

    return JSON.parse(JSON.stringify(newEvent));
  } catch (err) {
    handleError(err);
  }
};
