import styled from "styled-components";
import { adaptive } from "../../utils";

export default styled.div`
  color: ${(props) => props.theme.main.colors.blue};
  display: flex;
  align-items: flex-start;
  svg {
    color: inherit;
    flex-shrink: 0;
    margin: 0 6px 0 0;
    path {
      fill: currentColor;
    }
  }
  p {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    color: inherit;
    font-family: ${(props) => props.theme.main.fonts.primary};
    margin: -3px 0 0;
    @media screen and (max-width: ${adaptive.mobileEnd}) {
      display: none;
    }
    strong {
      color: inherit;
      font-family: inherit;
      font-style: normal;
      font-weight: 500;
      font-size: 24px;
      line-height: 24px;
    }
    span {
      color: inherit;
      font-family: inherit;
      font-style: normal;
      font-weight: 700;
      font-size: 11px;
      line-height: 120%;
      letter-spacing: 0.455em;
      text-transform: uppercase;
      display: block;
      margin: -2px 0 0;
    }
  }
`;
