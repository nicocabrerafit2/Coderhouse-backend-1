import path from "path";
import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// ------------MULTER INICIO---------
import multer from "node-multer";

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, __dirname + "./public/img");
  },
  fileName: (req, file, cb) => {
    cb(null, file.originalname);
  },
});
const uploader = multer({ storage });
// ------------MULTER FIN---------

export default { __dirname, uploader };
