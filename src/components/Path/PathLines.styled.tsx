import styled, { css } from "styled-components";
import { adaptive } from "../../utils";
import { strokeAnimation } from "../Animations/Animations";

type StyledPathLinesProps = {
  isMobile: boolean;
};
export default styled.picture<StyledPathLinesProps>`
  display: flex;
  justify-content: center;
  margin: 0 -30px;
  ${(props) =>
    props.isMobile
      ? css`
          @media screen and (max-width: ${adaptive.laptop}) {
            margin-top: -25%;
          }
        `
      : css`
          @media screen and (min-width: ${adaptive.laptop}) {
            margin-top: -420px;
          }
          @media screen and (max-width: ${adaptive.laptopM}) {
            margin-top: -320px;
          }
        `}

  svg {
    flex-shrink: 0;
    height: auto;
    width: 100%;
    &.path-svg {
      @media screen and (min-width: ${adaptive.laptop}) {
        width: 1920px;
      }
      @media screen and (max-width: ${adaptive.laptopM}) {
        width: 1640px;
      }
    }
    &.path-svg-mob {
      @media screen and (max-width: ${adaptive.laptop}) {
        width: 100%;
      }
    }
    /* path.stroke-line {
      stroke-dasharray: 7200;
      stroke-dashoffset: 7200;
      animation: ${strokeAnimation} 3s linear forwards;
    } */
  }
`;
