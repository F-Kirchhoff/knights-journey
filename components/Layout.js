import styled from "styled-components";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Layout({ resetMoves, children }) {
  const router = useRouter();
  return (
    <PageWrapper>
      <Header>
        <h1>The Knights Journey</h1>
        <Nav>
          <NavLink path={router.asPath} href="/">
            Journey
          </NavLink>
          <NavLink path={router.asPath} href="/score">
            Score
          </NavLink>
        </Nav>
        <Button onClick={resetMoves}>Reset</Button>
      </Header>
      {children}
    </PageWrapper>
  );
}

const Header = styled.header`
  width: 100%;
  display: flex;
  gap: 30px;
  padding: 20px 50px;
  align-items: center;
  h1 {
    margin-right: auto;
  }
`;

const Nav = styled.nav`
  display: contents;
`;

const Button = styled.button`
  border: solid 2px hsl(0 0% 0% / 0.8);
  color: hsl(0 0% 0% / 0.8);
  background-color: gray;
  border-radius: 5px;
  padding: 10px 20px;
  &:hover {
    background-color: crimson;
  }
`;

const NavLink = styled(Link)`
  color: inherit;
  text-underline-offset: 9px;
  text-decoration: ${({ path, href }) => {
    console.log(path, href);
    return path === href ? "underline 2px" : "none";
  }};
`;

const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 50px;
  padding-top: 0;
`;
