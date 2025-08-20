import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const router = express.Router();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Home page
router.get("/", (req, res) => {
  res.render("index");
});

// About page
// router.get("/about", (req, res) => {
//   res.sendFile(path.join(__dirname, "../views/about.html"));
// });

export default router;
