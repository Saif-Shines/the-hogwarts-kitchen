import express from "express";
import { Portkey } from "portkey-ai";
import axios from "axios";

import path from "path";
import cors from "cors";
import routes from "./routes";
import { portkey } from "./utils/templates";

import { recipeSample, systemRole, promptUserContext } from "./utils/templates";

const app = express();
const port = 3000;

app.use(express.json());
app.use(cors());
app.use(express.static(path.join(__dirname, "public")));
app.use(routes);

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
  res.end("home");
});

app.post("/api/axios/recipes", async (req, res) => {
  const body = req.body;
  const ingredients = body.ingredients;
  console.log("ingredients", ingredients);
  res.status(200).json({ status: "ok" });
});

app.listen(port, () => {
  console.log(`Listening on port ${port}...`);
});
