import Head from "next/head";
import Link from "next/link";
import Navbar from "../components/navbar/navbar";

export default function Home() {
  return (
    <>
      <Head>
        <title>Covid Locator</title>
        <meta name="description" content="A Covid statistcs mapper" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <div id="home-wrapper">
        <div id="home-content">
          <div className="title" id="home-title">
            <span id="home-covid">COVID</span> Locator
          </div>
          <Link href="/locate">
            <div className="button">Continue</div>
          </Link>
        </div>
      </div>
    </>
  );
}
