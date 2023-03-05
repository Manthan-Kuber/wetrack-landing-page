import Head from "next/head";
import Header from "@/components/Header";
import styles from "../styles/Home.module.css"
import { Gothic_A1 } from "next/font/google";

const gothic = Gothic_A1({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
});

export default function Home() {
  return (
    <div className={gothic.className} >
      <Head>
        <title>Dribble Landing Page</title>
        <meta
          name="description"
          content="Clone of a landing page from dribble"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className={styles.main} >
        <p>heyo</p>
      </main>
    </div>
  );
}
