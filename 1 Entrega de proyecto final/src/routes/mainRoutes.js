import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
  return res.send("este es el metodo get del (/)");
});
export default router;
