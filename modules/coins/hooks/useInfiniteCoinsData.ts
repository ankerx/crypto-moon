import axios from "axios";
import { useInfiniteQuery } from "@tanstack/react-query";
import { CoinType } from "../types/types";

export const getInfiniteCoinsData = async ({ pageParam = 1 }) => {
  const { data } = await axios.get(
    `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=${pageParam}&sparkline=false`
  );
  return data;
};

export const useInfiniteCoinsData = () => {
  return useInfiniteQuery<CoinType[], Error>(
    ["infinite-coins"],
    getInfiniteCoinsData,
    {
      getNextPageParam: (lastPage, pages) => pages.length + 1,
    }
  );
};
