import styled from "styled-components";
import css from "styled-jsx/css";

export default styled.button`
  border: none;
  padding: 5px;
  border-radius: 0;
  background-color: ${({ color }) =>
    color === "black" ? "hsl(0 0% 50% / 0.6)" : "hsl(0 0% 70% / 0.6)"};
  &:enabled {
    border: 2px solid hsl(120, 60%, 60%);
  }
  &:enabled:hover {
    background-color: ${({ color }) =>
      color === "black" ? "hsl(230 40% 10%)" : "hsl(30 30% 90%)"};
  }
  ${({ visited, color }) =>
    visited &&
    css`
      background-color: ${color === "black"
        ? "hsl(230 40% 10%)"
        : "hsl(30 30% 95%)"};
    `}
`;
