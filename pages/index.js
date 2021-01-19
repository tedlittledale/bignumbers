import Timeline from "../components/Timeline";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Tracks of our tiers</title>
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:creator" content="@_superted" />
        <meta property="og:url" content="https://covid-timeline.tedspace.me/" />
        <meta property="og:title" content="Tracks of our tiers" />
        <meta
          property="og:description"
          content="A timeline visualisation showing the relationship between covid case
          rates and local restriction tiers in the lead up to the January 2021
          lockdown."
        />
        <meta
          property="og:image"
          content="https://res.cloudinary.com/dc1yk89ve/image/upload/v1611052322/Screenshot_2021-01-19_at_10.22.23_dwsbss.png"
        />
        <link rel="icon" href="animated-favicon.gif" type="image/gif"></link>
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="theme-color" content="#ffffff" />
      </Head>
      <Timeline title="Index Page" linkTo="/other" />
    </>
  );
}
