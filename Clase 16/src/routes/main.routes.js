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
router.get('/:id', async (req, res) => {

    const { id } = req.params;

    const userFinded = await cursoModel.find({_id:id});

    res.json({ payload: userFinded , message: 'Successfully' })

})

export {router}