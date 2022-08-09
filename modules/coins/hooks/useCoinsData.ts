import axios from 'axios';
import { useQuery } from '@tanstack/react-query';
import { CoinType } from '../types/types';
const url =
  'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false';

export const getCoinsData = async () => {
  const { data } = await axios.get(url);
  return data;
};

export const useCoinsData = () => {
  return useQuery<CoinType[], Error>(['coins'], () => getCoinsData());
};
