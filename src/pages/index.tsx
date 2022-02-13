import type { NextPage } from 'next';
import Head from 'next/head';
import styles from '../styles/Home.module.css';

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Next.js Boiler-Plate</title>
        <meta name='description' content='Next.js Boiler-Plate' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
    </div>
  );
};

export default Home;
