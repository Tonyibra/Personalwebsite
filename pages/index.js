import Head from "next/head";
import { Header } from "../Components/Header";
import { HomeSection } from "../Components/HomeSection";
import { Intro } from "../Components/Intro";
import { AnimatePresence, motion } from "framer-motion";
import { Projects } from "../Components/Projects";
export default function Home() {
  const mainPage = {
    from: {
      opacity: 0,
    },
    to: { opacity: 1, transition: { delay: 3, duration: 2 } },
  };
  return (
    <>
      <div>
        <Head>
          <title>Home | Tony ibrahim</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <main>
          <Intro />
          <div className="max-w-4xl mx-auto">
            <motion.div initial="from" animate="to" variants={mainPage}>
              <Header />
              <HomeSection />
              <Projects />
            </motion.div>
          </div>
        </main>
      </div>
    </>
  );
}
