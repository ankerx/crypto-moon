import { useMemo, useContext } from "react";
import { FavoriteCoinsContext } from "./coins-context";

export const useFavoriteCoins = () => {
  const context = useContext(FavoriteCoinsContext);
  if (context === undefined) {
    throw new Error("useContext must be used within a CountProvider");
  }
  return useMemo(() => context, [context]);
};
