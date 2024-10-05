"use server";

// MODELS
import Event from "@/lib/db/models/event.model";
import Category from "@/lib/db/models/category.model";

// UTILS
import { connectDB } from "@/lib/db";
import { handleError } from "@/lib/utils";

// TYPES
import { CreateEventParams } from "@/types";

const getCategoryName = async (query: any) => {
  return query.populate({
    path: "category",
    model: Category,
    select: "_id name",
  });
};

export const createEvent = async ({
  event,
  userId,
  path,
}: CreateEventParams) => {
  try {
    await connectDB();

    const newEvent = await Event.create({
      ...event,
      category: event.categoryId,
    });

    return JSON.parse(JSON.stringify(newEvent));
  } catch (err) {
    handleError(err);
  }
};

export const getEventById = async (eventId: string) => {
  try {
    await connectDB();

    const event = await getCategoryName(Event.findById(eventId));

    return JSON.parse(JSON.stringify(event));
  } catch (err) {
    handleError(err);
  }
};
