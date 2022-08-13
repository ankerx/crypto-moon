import z from "zod";
import { coinSchema, trendingCoinSchema } from "../schema";

export type CoinType = z.infer<typeof coinSchema>;
export type TrendingCoinType = z.infer<typeof trendingCoinSchema>;
