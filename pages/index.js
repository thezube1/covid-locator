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
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cabin:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600;1,700&display=swap"
          rel="stylesheet"
        />
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
