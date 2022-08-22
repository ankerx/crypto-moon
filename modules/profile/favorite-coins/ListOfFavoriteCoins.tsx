import { useFavoriteCoinsData } from "modules/coins/hooks/useFavoritesCoinsData";

export const ListOfFavoriteCoins = () => {
  const { data, isLoading, error } = useFavoriteCoinsData();

  if (error) return <p>'An error has occurred:{error.message}'</p>;

  return (
    <section>
      <h1 className="text-red-500">List of your favorite coins</h1>
      {isLoading && <p>Loading...</p>}
      {data && data.map((item) => <p key={item.id}>{item.name}</p>)}
    </section>
  );
};
