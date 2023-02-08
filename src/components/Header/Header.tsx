import React from "react";
import Container from "../Container/Container";
import StyledHeader from "./Header.styled";

type HeaderProps = {
  LogoComponent: React.ReactNode;
  NavComponent: React.ReactNode;
};

const Header = ({ LogoComponent, NavComponent }: HeaderProps) => {
  return (
    <StyledHeader>
      <Container>
        {LogoComponent}
        {NavComponent}
      </Container>
    </StyledHeader>
  );
};

export default Header;
