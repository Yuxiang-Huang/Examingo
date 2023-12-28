import express from "express";
var cors = require("cors");
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
const app = express();

app.use(cors());

app.get("/", async (req, res) => {
  const users = await prisma.user.findMany();
  res.json(users);
});

app.post("/create", async function (req, res) {
  const newUser = await prisma.user.create({
    data: {
      name: "Yuxiang",
      email: "hello@prisma.com",
      posts: {
        create: {
          title: "My second post",
          body: "Lots of really interesting stuff",
          slug: "my-second-post",
        },
      },
    },
  });

  res.json();
});

app.listen(8000, () =>
  console.log("REST API server ready at: http://localhost:8000/")
);
