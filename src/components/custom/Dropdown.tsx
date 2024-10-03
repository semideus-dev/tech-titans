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
  onChange?: () => void;
}

export default function Dropdown({ value, onChange }: DropdownProps) {
  const [categories, setCategories] = useState<ICategory[]>([]);

  useEffect(() => {
    startTransition(async () => {
      const categories = await getCategories();
      console.log(categories);
      setCategories(categories as ICategory[]);
    });
  }, []);

  return (
    <Select onOpenChange={onChange} defaultValue={value}>
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
