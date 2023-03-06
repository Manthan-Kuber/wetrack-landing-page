import Head from "next/head";
import Header from "@/components/Header";
import styles from "../styles/Home.module.css";
import { Gothic_A1, Zilla_Slab, Rubik } from "next/font/google";
import Button from "@/components/Button";
import IconsList from "@/components/IconsList";
import MediaButtons from "@/components/MediaButtons";

const gothic = Gothic_A1({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
});

const zilla = Zilla_Slab({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--zilla-font",
});

const rubik = Rubik({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--rubik-font",
});

export default function Home() {
  return (
    <div className={gothic.className}>
      <Head>
        <title>Wetrack Landing Page</title>
        <meta
          name="description"
          content="Clone of a landing page from dribble"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className={styles.main}>
        <div className={styles.left}>
          <h1>Keep your business organized in just one application</h1>
          <span>
            Bill with downloadable statistics,measure profitability,manage team
            workloads,manage budgets and track performance
          </span>
          <div className={styles.btn_trusted_wrapper}>
            <div className={styles.btn_wrapper}>
              <Button bgColor="black" txtColor="white" isLarge>
                Try for free
              </Button>
              <Button hasBorder={true} bgColor="#f59fec" isLarge>
                Learn More
              </Button>
            </div>
            <div className={`${styles.trusted} ${zilla.variable}`}>
              <span>Trusted by greatest</span>
              <hr />
            </div>
            <IconsList />
          </div>
        </div>
        <div>
          {/* Project */}
          <div className={styles.project}>
            <div className={styles.project_name}>
              <span>AMAZON PROJECT</span>
              <span>TUE,30 AUG</span>
            </div>
            <span>Architecture Analysis</span>
            <div className={styles.project_timer_wrapper}>
              <MediaButtons />
              <span className={`${styles.timer} ${rubik.variable}`}>1:38:47</span>
            </div>
          </div>
          {/* Employee  */}
          <div></div>
          {/* Double card */}
          <div>
            {/* Card 1 */}
            <div></div>
            {/* Card 2  */}
            <div></div>
          </div>
        </div>
        {/* List of smol cards/tags */}
        <div></div>
      </main>
    </div>
  );
}
