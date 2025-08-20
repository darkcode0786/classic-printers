import express from "express";
import path from "path";
import { fileURLToPath } from "url";

import homeRoutes from "./src/routes/home.js"; // 👈 import routes

const app = express();
const PORT = 3000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Static files
app.use(express.static(path.join(__dirname, "public")));
// view engine
app.set("view engine", "ejs");
app.set("views", "./src/views");
// Use routes
app.use("/", homeRoutes);

app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
