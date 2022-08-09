import { Coins } from 'modules/coins/Coins';
import type { NextPage } from 'next';
import Head from 'next/head';

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Crypto</title>
        <meta name="description" content="Crypto dashboard" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1 className="text-red-500">hello crypto</h1>
        <Coins />
      </main>
    </div>
  );
};

export default Home;
