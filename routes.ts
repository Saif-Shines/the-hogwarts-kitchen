import express from "express";
import { portkey } from "./utils/templates";
import { promptUserContext, recipeSample, systemRole } from "./utils/templates";
const router = express.Router();

router.get("/test", (req, res) => {
  res.end("routes success");
});

router.post("/api/portkey/recipes", async (req, res) => {
  const body = req.body;
  const ingredients = body.ingredients;
  const prompt = promptUserContext(ingredients, recipeSample);
  const response = await portkey.chatCompletions.create({
    messages: [
      {
        role: "system",
        content: systemRole,
      },
      {
        role: "user",
        content: prompt,
      },
    ],
  });
  console.log(response.choices[0].message);
  res.json(response.choices[0].message);
});

export default router;
