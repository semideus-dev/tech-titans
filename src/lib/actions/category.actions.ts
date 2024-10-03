"use server";

import { CreateCategoryParams } from "@/types";
import { connectDB } from "@/lib/db";
import Category from "@/lib/db/models/category.model";
import { handleError } from "@/lib/utils";

export const createCategory = async ({
  categoryName,
}: CreateCategoryParams) => {
  try {
    await connectDB();

    const newCategory = await Category.create({ categoryName });

    return JSON.parse(JSON.stringify(newCategory));
  } catch (err) {
    handleError(err);
  }
};

export const getCategories = async () => {
  try {
    await connectDB();

    const categories = await Category.find();

    return JSON.parse(JSON.stringify(categories));
  } catch (err) {
    handleError(err);
  }
};
