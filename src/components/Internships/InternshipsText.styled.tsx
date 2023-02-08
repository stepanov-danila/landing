import styled from "styled-components";
import { adaptive } from "../../utils";

export default styled.p`
  font-family: ${(props) => props.theme.main.fonts.secondary};
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 160%;
  color: ${(props) => props.theme.main.colors.black};
  margin: 84px 0 0;
  position: relative;
  z-index: 2;

  @media screen and (max-width: ${adaptive.laptopL}) {
    font-size: 20px;
    margin-top: 40px;
  }
  @media screen and (max-width: ${adaptive.mobileEnd}) {
    font-size: 16px;
    margin-top: 30px;
  }
  @media screen and (max-width: ${adaptive.mobileM}) {
    font-size: 12px;
    margin-top: 28px;
  }
  a {
    font-family: inherit;
    font-style: inherit;
    font-weight: inherit;
    font-size: inherit;
    line-height: inherit;
    color: ${(props) => props.theme.main.colors.blue};
    text-decoration: underline;
    &:hover {
      text-decoration: none;
    }
  }
`;
