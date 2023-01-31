import Board from "../components/Board";

export default function Home({ moveHistory, moveKnight, resetMoves }) {
  if (moveHistory.length === 0) {
    return <h1>Loading...</h1>;
  }
  return <Board moveHistory={moveHistory} moveKnight={moveKnight} />;
}
