import { useInfiniteCoinsData } from "modules/coins/hooks/useInfiniteCoinsData";
import { Coin } from "modules/coins/components/Coin";
import { ButtonWithLink } from "@/components/ButtonWithLink";
import { useFavoriteCoinsData } from "modules/coins/hooks/useFavoritesCoinsData";

const Coins = () => {
  const {
    isLoading,
    error,
    data: coins,
    fetchNextPage,
  } = useInfiniteCoinsData();

  const { data: favoriteCoins } = useFavoriteCoinsData();

  if (isLoading) return <p>'Loading...'</p>;

  if (error) return <p>'An error has occurred:{error.message}'</p>;

  console.log(favoriteCoins);

  return (
    <div>
      <ButtonWithLink href="/" text="Home" />
      {coins.pages.map((item) =>
        item.map((coin) => <Coin key={coin.id} id={coin.id} name={coin.name} />)
      )}
      <button
        className="bg-black text-white py-2 px-4 rounded-md my-4"
        onClick={() => fetchNextPage()}
      >
        Load more...
      </button>
      {favoriteCoins?.map((item) => (
        <p key={item.name}>{item.name}</p>
      ))}
    </div>
  );
};

export default Coins;
