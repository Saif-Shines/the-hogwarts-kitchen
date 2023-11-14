import express from "express";
import { Portkey } from "portkey-ai";
import path from "path";
import cors from "cors";

const app = express();
const port = 3000;

app.use(express.json());
app.use(cors());
app.use(express.static(path.join(__dirname, "public")));

const portkey = new Portkey({
  apiKey: `${process.env.PORTKEYAI_API_KEY}`,
  mode: "single",
  llms: [
    {
      provider: "openai",
      model: "gpt-3.5-turbo",
      api_key: `${process.env.OPENAI_API_KEY}`,
      temperature: 0,
    },
  ],
});

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
  res.end("home");
});

app.post("/api/chat", async (req, res) => {
  const response = await portkey.chatCompletions.create({
    messages: [
      {
        role: "user",
        content: "Who are you ?",
      },
    ],
  });
  console.log(response.choices[0].message);
  res.end("ack");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}...`);
});
