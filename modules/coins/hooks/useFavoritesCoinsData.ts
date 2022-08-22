import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { FavoriteCoinType } from "../types/types";
import { getSession } from "next-auth/react";

const getUser = async () => {
  const session = await getSession();
  const ID = session?.user?.id;
  console.log(ID);
  return ID;
};
export const getFavoriteCoinsData = async () => {
  const id = await getUser();
  const res = await axios.post(
    "http://localhost:3000/api/favorites/get-favorites",
    { data: { id: id } }
  );
  console.log(res);

  return res.data;
};

export const useFavoriteCoinsData = () => {
  return useQuery<FavoriteCoinType[], Error>(["fav"], getFavoriteCoinsData);
};
