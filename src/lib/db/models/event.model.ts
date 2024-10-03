// DATABASE
import { Schema, model, models } from "mongoose";

export interface IEvent extends Document {
  _id: string;
  title: string;
  imageUrl: string;
  description?: string;
  eventLocation?: string;
  price?: string;
  sponser?: string;
  isFree: boolean;
  startDateTime: Date;
  endDateTime: Date;
  createdAt: Date;
  category: { _id: string; title: string };
}

const EventSchema = new Schema({
  title: {
    type: String,
    required: true,
  },

  imageUrl: {
    type: String,
    required: true,
  },

  description: {
    type: String,
  },

  eventLocation: {
    type: String,
  },

  price: {
    type: String,
  },

  sponser: {
    type: String,
  },
  isFree: {
    type: Boolean,
    default: false,
  },

  startDateTime: {
    type: Date,
    default: Date.now,
  },

  endDateTime: {
    type: Date,
    default: Date.now,
  },

  createdAt: {
    type: Date,
    default: Date.now,
  },

  category: {
    type: Schema.Types.ObjectId,
    ref: "Category",
  },
});

const Event = models.Event || model("Event", EventSchema);

export default Event;
