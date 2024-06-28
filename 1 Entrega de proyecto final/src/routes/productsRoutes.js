import { Router } from "express";
import fs from "fs";
import __dirname from "../utils.js";
const dataBaseJson = JSON.parse(
  fs.readFileSync(__dirname + "/data/dataBase.json", "utf-8")
);

const router = Router();

router.get("/", (req, res) => {
  const limitData = dataBaseJson.slice(0, 5);
  return res.send(limitData);
});

export default router;
