import { useCoinsData } from 'modules/coins/hooks/useCoinsData';

export const Coins = () => {
  const { isLoading, error, data: coins } = useCoinsData();

  if (isLoading) return <p>'Loading...'</p>;

  if (error) return <p>'An error has occurred:{error.message}'</p>;

  return (
    <div>
      {coins.map((coin) => (
        <p key={coin.id}>{coin.name}</p>
      ))}
    </div>
  );
};
