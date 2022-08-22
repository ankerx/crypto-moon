import z from "zod";
import type Prisma from "@prisma/client";
import { coinSchema, favoriteSchema, trendingCoinSchema } from "../schema";

export type CoinType = z.infer<typeof coinSchema>;
export type TrendingCoinType = z.infer<typeof trendingCoinSchema>;
export type FavoriteCoinType = z.infer<typeof favoriteSchema>;
export type favType = Prisma.FavoriteCoin;
