import { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "prisma/db";
import { favoritesArraySchema } from "schema";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const favorites = await prisma.favorites.findMany();
  try {
    if (favoritesArraySchema.safeParse(favorites).success) {
      res.status(200).json(favorites);
    } else {
      res.status(404).json({ message: "Wrong data" });
    }
  } catch (error) {
    res.status(404).json(error);
  }
};
