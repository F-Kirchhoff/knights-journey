import styled from "styled-components";
import { SQUARES } from "../lib/utils";
import Square from "./Square";

export default function Board() {
  return (
    <BoardWrapper>
      {SQUARES.map((square) => (
        <Square
          key={square.id}
          disabled={square.index % 7 !== 0}
          color={square.color}
        ></Square>
      ))}
    </BoardWrapper>
  );
}

const BoardWrapper = styled.div`
  max-width: 600px;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  grid-template-columns: repeat(8 1fr);
  aspect-ratio: 1;
  overflow: hidden;
  border-radius: 8px;
`;
