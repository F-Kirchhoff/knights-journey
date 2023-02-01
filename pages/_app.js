import { useEffect, useState } from "react";
import GlobalStyle from "../styles";
import { getRandomPosition } from "../lib/utils";
import useStore from "../lib/hooks/useStore";
import dynamic from "next/dynamic";

const Layout = dynamic(() => import("../components/Layout"), { ssr: false });

function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
