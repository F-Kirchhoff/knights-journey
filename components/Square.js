import styled from "styled-components";

export default styled.button`
  border: none;
  border-radius: 0;
  background-color: ${({ color }) =>
    color === "black" ? "HSL(230,10%,40%)" : "HSL(30,30%,90%)"};
  &:disabled {
    filter: brightness(0.7) saturate(0.1);
  }
`;
