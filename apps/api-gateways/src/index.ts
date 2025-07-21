import express from "express";
import { prismaclient } from "@repo/db/client";

const app = express();
app.use(express.json());

app.get("/", async (req, res) => {
  res.json({
    message: "server Up....",
  });
});

app.listen(3000, () => {
  console.log("Started at 3000");
});
