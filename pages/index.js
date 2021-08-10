import React from "react";
import Head from "next/head";
import { Header } from "../Components/Header";
import { HomeSection } from "../Components/HomeSection";
import { Intro } from "../Components/Intro";
import { AnimatePresence, motion } from "framer-motion";
import { Projects } from "../Components/Projects";
import Route from "../Components/Route";
export default function Home({ data }) {
  React.useEffect(() => {
    console.log(data);
    document.body.style.overflow = "hidden";
  }, []);
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
              <Route data={data} />
            </motion.div>
          </div>
        </main>
      </div>
    </>
  );
}
export async function getServerSideProps(context) {
  const res = await fetch(`http://localhost:3000/api/Projects`);
  const data = await res.json();

  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: { data }, // will be passed to the page component as props
  };
}
