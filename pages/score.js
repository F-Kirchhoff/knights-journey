import styled from "styled-components";
import useStore from "../lib/hooks/useStore";

export default function Page() {
  const moveHistory = useStore((state) => state.moveHistory);
  return (
    <PageWrapper>
      <h2>
        Total moves: {moveHistory.length} (
        {Math.floor((moveHistory.length / 64) * 100)}%)
      </h2>
      <h2>Current Position: {moveHistory[0]}</h2>
      <h3>Move History</h3>
      <MoveList>
        {moveHistory.map((position) => (
          <li key={position}>{position}</li>
        ))}
      </MoveList>
    </PageWrapper>
  );
}

const MoveList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  list-style: none;
  padding: 0;

  li {
    padding: 7px 18px;
    border: solid 2px hsl(0 0% 100% / 0.8);
    color: hsl(0 0% 100% / 0.8);
    background-color: gray;
    border-radius: 7px;
  }
`;

const PageWrapper = styled.main`
  width: 100%;
  max-width: 600px;
  display: grid;
  gap: 20px;
  * {
    margin: 0;
  }
`;
