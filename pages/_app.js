import { useEffect, useState } from "react";
import GlobalStyle from "../styles";
import { getRandomPosition } from "../lib/utils";
import Layout from "../components/Layout";

function MyApp({ Component, pageProps }) {
  const [moveHistory, setMoveHistory] = useState([]);
  useEffect(() => {
    const initialPosition = getRandomPosition();
    setMoveHistory([initialPosition]);
  }, []);

  function moveKnight(nextSquareId) {
    setMoveHistory([nextSquareId, ...moveHistory]);
  }

  function resetMoves() {
    const newInitialPosition = getRandomPosition();
    setMoveHistory([newInitialPosition]);
  }

  return (
    <>
      <GlobalStyle />
      <Layout resetMoves={resetMoves}>
        <Component
          {...pageProps}
          moveHistory={moveHistory}
          moveKnight={moveKnight}
        />
      </Layout>
    </>
  );
}

export default MyApp;
