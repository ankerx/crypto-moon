import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { favType } from "types";

export const getFavoriteCoinsData = async () => {
  const { data } = await axios.get(
    "http://localhost:3000/api/favorites/get-favorites"
  );
  return data;
};

export const useFavoriteCoinsData = () => {
  return useQuery<favType, Error>(["fav"], getFavoriteCoinsData);
};
