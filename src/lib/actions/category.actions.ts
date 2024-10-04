"use server";

import { connectDB } from "@/lib/db";
import Category from "@/lib/db/models/category.model";
import { handleError } from "@/lib/utils";

export const getCategories = async () => {
  try {
    await connectDB();

    const categories = await Category.find();

    return JSON.parse(JSON.stringify(categories));
  } catch (err) {
    handleError(err);
  }
};
