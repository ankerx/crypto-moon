import { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "prisma/db";
import type Prisma from "@prisma/client";
import { favoritesSchema } from "schema";
import { favoritesType } from "types";
export type favType = Readonly<Prisma.Favorites>;
export type Type = {
  name: string;
};
export default async (req: NextApiRequest, res: NextApiResponse) => {
  const name = req.body.data;

  const newFavorite: favoritesType = {
    name: name,
  };

  const newFavorites = await prisma.favorites.create({ data: newFavorite });

  try {
    if (favoritesSchema.safeParse(newFavorite).success) {
      res.status(200).json(newFavorites);
    } else {
      res.status(404).json({ message: "Wrong data" });
    }
  } catch (error) {
    res.status(404).json(error);
  }
};
