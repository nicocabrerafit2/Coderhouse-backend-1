import { Router } from "express";
import {cursoModel} from "../models/curso.model.js"
const router = Router()

router.get("/",async (req,res)=>{
    const cursos = await cursoModel.find()
   return res.json(cursos)
})
router.post("/",async (req,res)=>{
    const body = req.body
    const createCurso = await cursoModel.create(body)
    const cursos = await cursoModel.find()
   return res.json(cursos) 
})


export {router}