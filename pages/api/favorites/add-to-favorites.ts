import { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "prisma/db";
import { favoriteSchema } from "modules/coins/schema";
import { favType } from "modules/coins/types/types";
import { nanoid } from "nanoid";
export default async (req: NextApiRequest, res: NextApiResponse) => {
  const name = req.body.data;
  const userId = req.body;
  const newFavoriteCoin: favType = {
    name: name,
    id: nanoid(),
    userId: "123",
  };
  console.log(req.body.data);

  const newFavorites = await prisma.favoriteCoin.create({
    data: newFavoriteCoin,
  });

  try {
    res.status(200).json(req.body);
    // if (favoriteSchema.safeParse(newFavoriteCoin).success) {
    //   res.status(200).json(newFavorites);
    // } else {
    //   res.status(404).json({ message: "Wrong data" });
    // }
  } catch (error) {
    res.status(404).json(error);
  }
};
