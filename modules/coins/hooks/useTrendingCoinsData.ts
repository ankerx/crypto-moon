import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { TrendingCoinType } from "../types/types";

const url = "https://api.coingecko.com/api/v3/search/trending";

export const getTrendingCoinsData = async () => {
  const { data } = await axios.get(url);

  return data;
};

export const useTrendingCoinsData = () => {
  return useQuery<TrendingCoinType, Error>(
    ["trending-coins"],
    getTrendingCoinsData
  );
};
