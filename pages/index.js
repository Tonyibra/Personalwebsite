import Head from "next/head";
import { Header } from "../Components/Header";
import { Intro } from "../Components/Intro";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Home | Tony ibrahim</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* Header */}

      {/* body */}
      <section className="flex ">
        <Intro />
      </section>
      {/* footer */}
    </div>
  );
}
