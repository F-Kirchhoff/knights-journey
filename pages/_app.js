import { useEffect, useState } from "react";
import GlobalStyle from "../styles";
import { getRandomPosition } from "../lib/utils";
import Layout from "../components/Layout";
import useStore from "../lib/hooks/useStore";

function MyApp({ Component, pageProps }) {
  const resetMoves = useStore((state) => state.resetMoves);

  useEffect(() => {
    resetMoves();
  }, []);

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
