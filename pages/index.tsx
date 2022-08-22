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
import { getSession } from "next-auth/react";
import { TrendingCoins } from "modules/coins/components/TrendingCoins";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>CryptoMoon</title>
        <meta name="description" content="Crypto dashboard" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Header />
        <TrendingCoins />
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
