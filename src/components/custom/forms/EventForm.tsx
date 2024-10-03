"use client";

// DATEPICKER
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

// REACT
import { useState } from "react";

// UI
import Dropdown from "@/components/custom/Dropdown";
import FileUploader from "@/components/custom/FileUploader";

import { Icon } from "@iconify/react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

// ZOD
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { eventDefaultValues, eventFormSchema } from "@/lib/validator";
import { Checkbox } from "@/components/ui/checkbox";

interface EventFormProps {
  userId: string;
  type: "Create" | "Update";
}

export default function EventForm({ userId, type }: EventFormProps) {
  const [files, setFiles] = useState<File[]>([]);

  const form = useForm<z.infer<typeof eventFormSchema>>({
    resolver: zodResolver(eventFormSchema),
    defaultValues: eventDefaultValues,
  });

  const onSubmit = (data: z.infer<typeof eventFormSchema>) => {
    console.log(data);
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="w-[90%] space-y-8 rounded-lg border border-t-primary bg-neutral-950 p-4"
      >
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Title</FormLabel>
                <FormControl>
                  <Input type="text" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="categoryId"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Category</FormLabel>
                <FormControl>
                  <Dropdown onChange={field.onChange} value={field.value} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Description</FormLabel>
                <FormControl>
                  <Textarea {...field} className="h-36 resize-none bg-input" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="imageUrl"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Poster</FormLabel>
                <FormControl>
                  <FileUploader
                    onFieldChange={field.onChange}
                    imageUrl={field.value}
                    setFiles={setFiles}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="eventLocation"
            render={({ field }) => (
              <FormItem className="md:col-span-2">
                <FormLabel>Event Location</FormLabel>
                <FormControl>
                  <div className="flex items-center space-x-2 rounded-md border bg-input">
                    <Icon
                      icon="fluent:location-20-filled"
                      fontSize={24}
                      className="ml-2 text-muted-foreground"
                    />
                    <Input type="text" {...field} className="border-none" />
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="sponser"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Sponsered by</FormLabel>
                <FormControl>
                  <div className="flex items-center space-x-2 rounded-md border bg-input">
                    <Icon
                      icon="ri:advertisement-fill"
                      fontSize={24}
                      className="ml-2 text-muted-foreground"
                    />
                    <Input type="text" {...field} className="border-none" />
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="price"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Price</FormLabel>
                <FormControl>
                  <div className="flex items-center space-x-2 rounded-md border bg-input">
                    <Icon
                      icon="clarity:rupee-line"
                      fontSize={24}
                      className="ml-2 text-muted-foreground"
                    />
                    <Input type="number" {...field} className="border-none" />

                    <FormField
                      control={form.control}
                      name="isFree"
                      render={({ field }) => (
                        <FormItem>
                          <FormControl>
                            <div className="flex items-center">
                              <label
                                htmlFor="isFree"
                                className="whitespace-nowrap pr-3 leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                              >
                                Free Ticket
                              </label>
                              <Checkbox
                                onCheckedChange={field.onChange}
                                checked={field.value}
                                id="isFree"
                                className="border-primary-500 mr-2 h-5 w-5 border-2"
                              />
                            </div>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="startDateTime"
            render={({ field }) => (
              <FormItem>
                <FormLabel>From</FormLabel>
                <FormControl>
                  <div className="flex items-center space-x-2 rounded-md border bg-input">
                    <Icon
                      icon="uis:calender"
                      fontSize={24}
                      className="ml-2 text-muted-foreground"
                    />
                    <DatePicker
                      selected={field.value}
                      onChange={(date) => field.onChange(date)}
                      className="w-[300px] bg-input px-3 py-2 text-white"
                      showTimeSelect
                      timeInputLabel="Time:"
                      dateFormat="MMMM d, yyyy h:mm aa"
                    />
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="endDateTime"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Till</FormLabel>
                <FormControl>
                  <div className="flex items-center space-x-2 rounded-md border bg-input">
                    <Icon
                      icon="uis:calender"
                      fontSize={24}
                      className="ml-2 text-muted-foreground"
                    />
                    <DatePicker
                      selected={field.value}
                      onChange={(date) => field.onChange(date)}
                      className="w-[300px] bg-input px-3 py-2 text-white"
                      showTimeSelect
                      timeInputLabel="Time:"
                      dateFormat="MMMM d, yyyy h:mm aa"
                    />
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <Button size="lg" disabled={form.formState.isSubmitting} type="submit">
          {form.formState.isSubmitting ? "Submitting..." : "Submit"}
        </Button>
      </form>
    </Form>
  );
}
