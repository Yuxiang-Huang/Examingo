import express from "express";
import { PrismaClient } from "@prisma/client";

export const handler = async (event: any) => {
  const prisma = new PrismaClient();
  const app = express();

  app.use(express.json());

  const users = await prisma.user.findMany();

  const response = {
    statusCode: 200,
    body: JSON.stringify(users),
  };
  return response;
};
