import Board from "../components/Board";
import useStore from "../lib/hooks/useStore";

export default function Home() {
  const moveHistory = useStore((state) => state.moveHistory);
  if (moveHistory.length === 0) {
    return <h2>Start a new game</h2>;
  }
  return <Board />;
}
