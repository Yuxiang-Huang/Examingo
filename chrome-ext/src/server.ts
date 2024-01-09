import express from "express";
var cors = require("cors");
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
const app = express();

app.use(express.json());
app.use(cors());

app.get("/", async (req, res) => {
  const usernameValue: string = req.query.username as string;
  const user = await prisma.user.findUnique({
    where: {
      username: usernameValue,
    },
  });
  res.json(user);
});

app.post("/create", async function (req, res) {
  const { username, password } = req.body;
  const user = await prisma.user.findUnique({
    where: {
      username: username,
    },
  });
  if (user == null) {
    const newUser = await prisma.user.create({
      data: {
        username: username,
        password: password,
      },
    });
    res.json({ status: 200 });
  } else {
    res.json({ status: 209 });
  }
});

app.listen(8000, () =>
  console.log("REST API server ready at: http://localhost:8000/")
);
