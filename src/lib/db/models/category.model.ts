// DATABASE
import { model, models, Schema } from "mongoose";

export interface ICategory extends Document {
  _id: string;
  title: string;
}

const CategorySchema = new Schema({
  title: {
    type: String,
    required: true,
  },
});

const Category = models.Category || model("Category", CategorySchema);

export default Category;
