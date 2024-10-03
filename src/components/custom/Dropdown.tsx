"use client";

// MODELS
import { ICategory } from "@/lib/db/models/category.model";

// REACT
import { startTransition, useState } from "react";

// UI
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

interface DropdownProps {
  value?: string;
  onChange?: () => void;
}

export default function Dropdown({ value, onChange }: DropdownProps) {
  const [categories, setCategories] = useState<ICategory[]>([]);
  const [newCategory, setNewCategory] = useState("");

  async function handleAddCategory() {}

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
        {/* <Dialog>
          <DialogTrigger className="w-full rounded-md px-3 py-2 text-left text-primary hover:bg-neutral-800">
            + Add new category
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>new category</DialogTitle>
              <DialogDescription>
                Give a new unique name for your category.
              </DialogDescription>
            </DialogHeader>
            <Input
              type="text"
              onChange={(e) => setNewCategory(e.target.value)}
            />
            <DialogFooter>
              <Button variant="destructive">Cancel</Button>
              <Button onClick={() => startTransition(handleAddCategory)}>
                Add
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog> */}
      </SelectContent>
    </Select>
  );
}
