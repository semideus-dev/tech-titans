"use client";

// MODELS
import { ICategory } from "@/lib/db/models/category.model";

// REACT
import { startTransition, useEffect, useState } from "react";

// UI
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { getCategories } from "@/lib/actions/category.actions";

interface DropdownProps {
  value?: string;
  onChangeHandler?: () => void;
}

export default function Dropdown({ value, onChangeHandler }: DropdownProps) {
  const [categories, setCategories] = useState<ICategory[]>([]);

  useEffect(() => {
    startTransition(async () => {
      const categoryList = await getCategories();
      console.log(categories);
      categoryList && setCategories(categoryList as ICategory[]);
    });
  }, []);

  return (
    <Select onValueChange={onChangeHandler} defaultValue={value}>
      <SelectTrigger>
        <SelectValue placeholder="Select a category" />
      </SelectTrigger>
      <SelectContent>
        {categories.map((category) => (
          <SelectItem key={category._id} value={category._id}>
            {category.name}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
