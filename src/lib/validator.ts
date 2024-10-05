// ZOD
import * as z from "zod";

export const eventDefaultValues = {
  title: "",
  description: "",
  location: "",
  imageUrl: "",
  startDateTime: new Date(),
  endDateTime: new Date(),
  categoryId: "",
  price: "",
  isFree: false,
  sponser: "",
};

export const eventFormSchema = z.object({
  title: z.string().min(1, { message: "Title is required." }),
  description: z
    .string()
    .min(10, { message: "Description is too short." })
    .max(2500, {
      message: "Description is exceeding character limit of 2500.",
    }),
  eventLocation: z.string().min(1, { message: "Location is required." }),
  imageUrl: z.string().min(1, { message: "Image is required." }),
  sponser: z.string(),
  startDateTime: z.date(),
  endDateTime: z.date(),
  categoryId: z.string(),
  price: z.string(),
  isFree: z.boolean(),
});
