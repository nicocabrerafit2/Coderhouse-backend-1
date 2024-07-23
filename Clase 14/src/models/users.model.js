import { Schema, model } from "mongoose";
const userSchema = new Schema({
  name: String,
  apellido: String,
  mail: String,
});
const userModel = model("usuarios", userSchema);
export { userModel };
