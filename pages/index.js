import Head from "next/head";
import { Header } from "../Components/Header";
import { HomeSection } from "../Components/HomeSection";
import { Intro } from "../Components/Intro";
export default function Home() {
  return (
    <div>
      <Head>
        <title>Home | Tony ibrahim</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="max-w-4xl mx-auto">
        <Intro />
        <HomeSection />
      </main>
    </div>
  );
}
