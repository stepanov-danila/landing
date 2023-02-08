import styled from "styled-components";
import { adaptive } from "../../utils";

export default styled.a`
  font-family: ${(props) => props.theme.main.fonts.primary};
  font-style: normal;
  font-weight: 800;
  font-size: 42px;
  line-height: 110%;
  color: ${(props) => props.theme.main.colors.white};
  text-decoration: none;
  @media screen and (max-width: ${adaptive.laptopL}) {
    font-size: 36px;
  }
  @media screen and (max-width: ${adaptive.mobileEnd}) {
    font-size: 24px;
  }
  &:hover {
    text-decoration: underline;
  }
`;
