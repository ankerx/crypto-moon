import z from "zod";

export const favoriteSchema = z.object({
  id: z.string(),
  userId: z.string(),
  name: z.string(),
});
export const favoriteArraySchema = z.array(
  z.object({
    id: z.string(),
    userId: z.string(),
    name: z.string(),
  })
);

export const coinSchema = z.object({
  id: z.string(),
  symbol: z.string(),
  name: z.string(),
  image: z.string(),
  current_price: z.number(),
  market_cap: z.number(),
  market_cap_rank: z.number(),
  fully_diluted_valuation: z.number(),
  total_volume: z.number(),
  high_24h: z.number(),
  low_24h: z.number(),
  price_change_24h: z.number(),
  price_change_percentage_24h: z.number(),
  market_cap_change_24h: z.number(),
  market_cap_change_percentage_24h: z.number(),
  circulating_supply: z.number(),
  total_supply: z.number(),
  max_supply: z.number(),
  ath: z.number(),
  ath_change_percentage: z.number(),
  ath_date: z.string(),
  atl: z.number(),
  atl_change_percentage: z.number(),
  atl_date: z.string(),
  roi: z.null(),
  last_updated: z.string(),
});

export const itemSchema = z.object({
  id: z.string(),
  coin_id: z.number(),
  name: z.string(),
  symbol: z.string(),
  market_cap_rank: z.number(),
  thumb: z.string(),
  small: z.string(),
  large: z.string(),
  slug: z.string(),
  price_btc: z.number(),
  score: z.number(),
});

export const coinsEntitySchema = z.object({
  item: itemSchema,
});
export const trendingCoinSchema = z.object({
  coins: z.array(coinsEntitySchema).optional().nullable(),
  exchanges: z.array(z.null()).optional().nullable(),
});
