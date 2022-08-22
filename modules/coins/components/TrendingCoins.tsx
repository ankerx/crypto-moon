import { ButtonWithLink } from "@/components/ButtonWithLink";
import { useTrendingCoinsData } from "../hooks/useTrendingCoinsData";
import { Coin } from "./Coin";

export const TrendingCoins = () => {
  const { isLoading, error, data } = useTrendingCoinsData();

  if (isLoading) return <p>'Loading...'</p>;

  if (error) return <p>'An error has occurred:{error.message}'</p>;

  return (
    <section>
      {data &&
        data.coins?.map((coin) => (
          <Coin
            name={coin.item.name}
            key={coin.item.coin_id}
            id={coin.item.id}
          />
        ))}
      <ButtonWithLink href="/coins" text="See all the coins" />
    </section>
  );
};
