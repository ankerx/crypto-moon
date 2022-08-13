import { dehydrate, QueryClient } from "@tanstack/react-query";
import { Coin } from "modules/coins/components/Coin";
import {
  getTrendingCoinsData,
  useTrendingCoinsData,
} from "modules/coins/hooks/useTrendingCoinsData";
import type { NextPage } from "next";
import Head from "next/head";
import { Header } from "modules/header/Header";
import { ButtonWithLink } from "@/components/ButtonWithLink";
import { useFavoriteCoins } from "context/favorite-coins/useFavoriteCoins";

const Home: NextPage = () => {
  const { state } = useFavoriteCoins();
  const { isLoading, error, data } = useTrendingCoinsData();
  console.log(state.favorites);

  if (isLoading) return <p>'Loading...'</p>;

  if (error) return <p>'An error has occurred:{error.message}'</p>;

  const trendingCoins = data?.coins?.map((item) => (
    <Coin name={item.item.name} key={item.item.coin_id} id={item.item.id} />
  ));

  return (
    <div>
      <Head>
        <title>CryptoMoon</title>
        <meta name="description" content="Crypto dashboard" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Header />
        <section className="flex flex-col items-center justify-center">
          {trendingCoins}
          <ButtonWithLink href="/coins" text="See all the coins" />
        </section>
        <p>favorites</p>
      </main>
    </div>
  );
};

export default Home;

export async function getStaticProps() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery(["trending-coins"], getTrendingCoinsData);

  return {
    props: { dehydratedState: dehydrate(queryClient) },
  };
}
