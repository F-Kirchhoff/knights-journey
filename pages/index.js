import styled from "styled-components";
import Board from "../components/Board";

export default function Home() {
  return (
    <PageWrapper>
      <h1>The Knights Journey</h1>
      <Board />
    </PageWrapper>
  );
}

const PageWrapper = styled.main`
  display: flex;
  flex-direction: column;
  gap: 50px;
  min-height: 100vh;
  align-items: center;
`;
