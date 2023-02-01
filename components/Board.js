import styled from "styled-components";
import Knight from "./Knight";
import Square from "./Square";
import { SQUARES, checkIfLegalMove } from "../lib/utils";
import useStore from "../lib/hooks/useStore";

export default function Board() {
  const getCurrentSquare = useStore((state) => state.getCurrentSquare);
  const currentSquare = getCurrentSquare();
  const moveHistory = useStore((state) => state.moveHistory);
  const moveKnight = useStore((state) => state.moveKnight);

  if (!currentSquare) {
    return <h2>Start a new Game</h2>;
  }

  return (
    <BoardWrapper>
      {SQUARES.map((square) => (
        <Square
          key={square.id}
          disabled={
            !checkIfLegalMove(currentSquare, square) ||
            moveHistory.includes(square.id)
          }
          color={square.color}
          visited={moveHistory.includes(square.id)}
          onClick={() => moveKnight(square.id)}
        >
          {square.id === currentSquare.id && <Knight />}
        </Square>
      ))}
    </BoardWrapper>
  );
}

const BoardWrapper = styled.div`
  max-width: 600px;
  width: 100%;
  max-height: 600px;
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  grid-template-rows: repeat(8, 1fr);
  aspect-ratio: 1;
  overflow: hidden;
  border-radius: 8px;
  box-shadow: 0 0 1px 2px hsl(0 0% 100% / 0.6);
`;
