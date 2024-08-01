import { Schema, model } from "mongoose";
const cartStructure = new Schema({
  products: Array,
});

const cartDb = model("cartDb", cartStructure);

export { cartDb };
