import Head from "next/head";
import Header from "@/components/Header";
import styles from "../styles/Home.module.css";
import { Gothic_A1, Zilla_Slab, Rubik } from "next/font/google";
import Button from "@/components/Button";
import IconsList from "@/components/IconsList";
import MediaButtons from "@/components/MediaButtons";
import Avatar from "@/components/Avatar";
import olga from "../../public/olga-nayda-fHXpgMd_XhE-unsplash.jpg";
import nico from "../../public/nicolas-horn-MTZTGvDsHFY-unsplash.jpg";
import vicky from "../../public/vicky-hladynets-C8Ta0gwPbQg-unsplash.jpg";
import Tag from "@/components/Tag";
import CardRow from "@/components/CardRow";

const gothic = Gothic_A1({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  variable: "--gothic-font",
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
    <>
      <Head>
        <title>Wetrack Landing Page</title>
        <meta
          name="description"
          content="Clone of a landing page from dribble"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={gothic.className}>
        <Header />
        <main className={styles.main}>
          <div className={styles.left}>
            <h1>Keep your business organized in just one application</h1>
            <span>
              Bill with downloadable statistics,measure profitability,manage
              team workloads,manage budgets and track performance
            </span>
            <div className={styles.btn_trusted_wrapper}>
              <div className={`${styles.btn_wrapper} ${gothic.variable}`}>
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
                <span className={`${styles.timer} ${rubik.variable}`}>
                  1:38:47
                </span>
              </div>
            </div>
            {/* Employee  */}
            <div className={styles.employee}>
              <div className={styles.employee_content_wrapper}>
                {/* Left */}
                <div className={styles.employee_left}>
                  <div>
                    <span className={styles.employee_card_subtext}>
                      Employee
                    </span>
                    <span>Leonard Lauren</span>
                  </div>
                  <div className={styles.employee_info_wrapper}>
                    <div>
                      <span className={styles.employee_card_subtext}>
                        Total
                      </span>
                      <span>Billable</span>
                    </div>
                    <div>
                      <span className={styles.employee_card_subtext}>
                        48:00
                      </span>
                      <span>42:00</span>
                    </div>
                    <div>
                      <span className={styles.employee_salary}>3,150 USD</span>
                    </div>
                  </div>
                </div>
                {/* Right */}
                <Avatar img={olga} size={75} />
              </div>
            </div>
            {/* Double card */}
            <div className={styles.doublecard}>
              {/* Card 1 */}
              <div className={styles.doublecard_design}>
                <div className={styles.doublecard_design_tag_wrapper}>
                  <Tag bgColor={"#f59fec"}>Design</Tag>
                  <Tag bgColor={"#f2f2f2"} txtColor={"#878787"}>
                    3 Tasks
                  </Tag>
                </div>
                <CardRow
                  title="Design System"
                  time={"27:40:12"}
                  avatar1={vicky}
                  avatar2={nico}
                />
              </div>
              {/* Card 2  */}
              <div></div>
            </div>
          </div>
          {/* List of smol cards/tags */}
          <div></div>
        </main>
      </div>
    </>
  );
}
