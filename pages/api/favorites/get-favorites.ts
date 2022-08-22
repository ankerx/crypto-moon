import { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "prisma/db";
import { favoriteArraySchema } from "modules/coins/schema";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { id } = req.body.data;

  const user = await prisma.user.findUnique({ where: { id: id } });
  if (!user) throw Error;

  const favoriteCoins = await prisma.favoriteCoin.findMany({
    where: { userId: id },
  });

  try {
    if (favoriteArraySchema.safeParse(favoriteCoins).success) {
      res.status(200).json(favoriteCoins);
    } else {
      res.status(404).json({ message: "Wrong data" });
    }
  } catch (error) {
    res.status(404).json(error);
  }
};
