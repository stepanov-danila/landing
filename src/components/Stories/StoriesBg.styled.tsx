import styled, { keyframes, css } from "styled-components";
import { adaptive } from "../../utils";
import { strokeAnimation } from "../Animations/Animations";

const StoriesMountainStrokeAnimation = keyframes`
  99% {
    stroke-dashoffset: 48;
    fill: none
  }
  100% {
    stroke-dashoffset: 0;
    fill: #fff
  }
`;

type StyledStoriesBg = {
  showAnimation: boolean;
};

export default styled.div<StyledStoriesBg>`
  height: 100%;
  width: 100%;
  position: absolute;
  z-index: 1;
  overflow: hidden;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  picture {
    height: 100%;
    width: 1920px;
    position: absolute;
    z-index: 1;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    bottom: 0;
    @media screen and (max-width: ${adaptive.laptopL}) {
      width: 100%;
    }
  }
  svg.stories-spiral-svg {
    width: 780px;
    height: 307px;
    position: absolute;
    top: 176px;
    left: -22px;
    @media screen and (max-width: ${adaptive.laptopL}) {
      top: unset;
      left: 0;
      bottom: -100px;
      width: 484px;
      height: 200px;
    }
    @media screen and (max-width: ${adaptive.mobileEnd}) {
      top: unset;
      left: 0;
      bottom: -65px;
      width: auto;
      height: 133px;
    }
    path {
      stroke-dasharray: 1270;
      stroke-dashoffset: 1270;

      ${(props) =>
        props.showAnimation &&
        css`
          animation: ${strokeAnimation} 0.7s 2.5s linear forwards;
        `}
      @media screen and (max-width: ${adaptive.laptopL}) {
        stroke-dashoffset: -1270;
        animation-delay: 0.5s;
        animation-duration: 2s;
      }
    }
  }
  svg.stories-line-svg {
    width: 605px;
    height: 86px;
    position: absolute;
    top: 342px;
    left: 712px;
    @media screen and (max-width: ${adaptive.laptopL}) {
      display: none;
    }
    path {
      stroke-dasharray: 625;
      stroke-dashoffset: 625;
      ${(props) =>
        props.showAnimation &&
        css`
          animation: ${strokeAnimation} 0.7s 1.8s linear forwards;
        `}
    }
  }
  svg.stories-mountain-svg {
    width: 907px;
    height: 252px;
    position: absolute;
    left: 1038px;
    top: 120px;
    @media screen and (max-width: ${adaptive.laptopL}) {
      height: 220px;
      width: auto;
      top: 120px;
      right: -150px;
      left: unset;
    }
    @media screen and (max-width: ${adaptive.tabletEnd}) {
      right: -250px;
    }
    @media screen and (max-width: ${adaptive.mobileEnd}) {
      height: 101px;
      width: auto;
      top: 158px;
      right: -112px;
      left: unset;
    }
    path {
      stroke-dasharray: 4740;
      stroke-dashoffset: -4740;
      fill: none;
      ${(props) =>
        props.showAnimation &&
        css`
          animation: ${StoriesMountainStrokeAnimation} 2s 0.5s linear forwards;
        `}
    }
  }
`;
