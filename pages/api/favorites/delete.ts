import { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "prisma/db";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const id = req.body.id;

  await prisma.favoriteCoin.delete({ where: { name: id } });

  try {
    res.status(200).json("Successfully deleted");
  } catch (error) {
    res.status(404).json(error);
  }
};
