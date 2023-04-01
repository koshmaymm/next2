import styles from './index.module.css';
import Head from "next/head";


const Home = () => {

  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <main className={styles.main}>
        Home
      </main>
    </>
  )
}

export default Home;

