import express from "express";
import { client } from "@repo/db/client";
const app = express();
const port = 3000;
app.use(express.json());
app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.get("/hello", (req, res) => {
  res.send("Hello World!");
});
app.post("/signup", async (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  const user = await client.user.create({
    data: {
      email,
      password,
    },
  });
  res.status(200).json({});
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
