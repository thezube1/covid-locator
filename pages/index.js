import Head from "next/head";
import Link from "next/link";
import Navbar from "../components/navbar/navbar";
import Locate from "../pages/locate";

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
          <div className="seperator"></div>
          <div id="home-data-wrapper">
            <div className="text">Our Data Sources:</div>
            <a
              rel="noopener noreferrer"
              target="_blank"
              href="https://github.com/CSSEGISandData/COVID-19"
            >
              <div className="text home-data-source" style={{ marginLeft: 0 }}>
                CSSE @ John Hopkins COVID data
              </div>
            </a>
            <a
              rel="noopener noreferrer"
              target="_blank"
              href="https://dev.socrata.com/foundry/data.cdc.gov/8xkx-amqh"
            >
              <div className="text home-data-source" style={{ marginLeft: 0 }}>
                CDC Vaccination API
              </div>
            </a>
            <a
              rel="noopener noreferrer"
              target="_blank"
              href="https://www.census.gov/data/developers/data-sets/acs-1year.html"
            >
              <div className="text home-data-source" style={{ marginLeft: 0 }}>
                Census data API (2019)
              </div>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
