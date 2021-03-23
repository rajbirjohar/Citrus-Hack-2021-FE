import Head from "next/head";
import Nav from "./Nav";
import Footer from "./Footer";

export const siteTitle = "Citrus Hack | FE";

export default function Container({ children, main }) {
  return (
    <>
      <Head>
        <meta
          name="description"
          content="Citrus Hack reimagined."
        />

        <meta name="og:title" content={siteTitle} />
      </Head>
      <Nav />
      <div className="flex flex-col justify-center items-center px-6">
        {children}
      </div>
      <Footer />
    </>
  );
}
