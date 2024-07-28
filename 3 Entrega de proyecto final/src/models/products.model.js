import { Schema, model } from "mongoose";
const productStructure = new Schema({
  title: String,
  description: String,
  code: String,
  price: Number,
  stock: Number,
  category: String,
  thumbnails: Array,
});

const productDb = model("productDb", productStructure);

export { productDb };
