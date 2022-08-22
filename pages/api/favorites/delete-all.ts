import { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "prisma/db";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  await prisma.favorites.deleteMany();

  try {
    res.status(200).json("All items successfully deleted");
  } catch (error) {
    res.status(404).json(error);
  }
};
