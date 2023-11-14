import express from "express";
import { fileURLToPath } from "bun";
import path from "path";
import cors from "cors";

const app = express();
const port = 3000;

app.use(express.json());
app.use(cors());
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
  res.end("sent");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}...`);
});
