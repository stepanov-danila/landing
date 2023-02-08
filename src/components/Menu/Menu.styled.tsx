import styled from "styled-components";
import { adaptive } from "../../utils";

export default styled.menu`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin: 0;
  padding: 0;
  @media screen and (max-width: ${adaptive.mobileL}) {
    margin-right: -5px;
  }
  a {
    font-family: ${(props) => props.theme.main.fonts.secondary};
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 110%;
    color: ${(props) => props.theme.main.colors.black};
    transition-duration: ${(props) => props.theme.main.transition.duration};
    transition-property: color;
    text-decoration: none;
    @media screen and (max-width: ${adaptive.mobileL}) {
      font-weight: 600;
      font-size: 12px;
    }
    &:hover {
      color: ${(props) => props.theme.main.colors.blue};
    }
    & + a {
      margin-left: 60px;
      @media screen and (max-width: ${adaptive.mobileEnd}) {
        margin-left: 35px;
      }
      @media screen and (max-width: ${adaptive.mobileL}) {
        margin-left: 15px;
      }
    }
  }
`;
