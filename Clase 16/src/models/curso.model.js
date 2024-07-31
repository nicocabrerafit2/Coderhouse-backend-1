import { Schema, model } from "mongoose";

const cursoSchema = new Schema({
    name: String,
    alumnos: Array,
cantidadDeAlumnos: Number,
materias: Array,
profesor: String,
comision: Number
})

const cursoModel = model("curso",cursoSchema)
export {cursoModel}