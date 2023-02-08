import styled, { css } from "styled-components";
import ButtonBase from "@mui/material/ButtonBase";
import Text from "../../components/Text/Text.styled";
import Title from "../../components/Title/Title.styled";
import Container from "../../components/Container/Container.styled";
import {
  fadeAnimation,
  planeAnimation,
  strokeAnimation,
  strokeMobShowcaseLine1Animation,
} from "../../components/Animations/Animations";
import { adaptive } from "../../utils";

export default styled.div`
  position: relative;
  z-index: 2;
  padding-top: 10px;
  margin-bottom: -150px;
  @media screen and (max-width: ${adaptive.laptopL}) {
    margin: 0 0 50px;
  }
  /* @media screen and (max-width: ${adaptive.tabletEnd}) {
    overflow: hidden;
  } */
`;

export const ShowcaseContainer = styled(Container)`
  display: grid;
  grid-template-columns: 1fr 668px;
  align-items: flex-start;
  justify-content: start;
  position: relative;
  @media screen and (max-width: ${adaptive.laptopL}) {
    display: block;
  }
`;

export const ShowcaseTypography = styled.div`
  position: relative;
  z-index: 3;
`;

export const ShowcaseTitle = styled(Title)`
  margin-top: 100px;
  position: relative;
  z-index: 2;
  @media screen and (max-width: ${adaptive.laptopL}) and (min-width: ${adaptive.tabletStart}) {
    padding-right: 320px;
  }
  @media screen and (max-width: ${adaptive.mobileEnd}) {
    font-size: 32px;
    margin-top: 50px;
  }
  @media screen and (max-width: ${adaptive.mobileL}) {
    font-size: 18px;
    margin-top: 10px;
  }
  strong {
    color: ${(props) => props.theme.main.colors.orange};
    text-align: center;
    margin: 5px 0 0;
    @media screen and (max-width: ${adaptive.laptopL}) {
      text-align: left;
    }
    @media screen and (max-width: ${adaptive.mobileEnd}) {
      font-size: 50px;
    }
    @media screen and (max-width: ${adaptive.mobileL}) {
      font-size: 32px;
    }
  }
  br {
    @media screen and (max-width: ${adaptive.laptopL}) {
      display: none;
    }
  }
`;

export const ShowcaseText = styled(Text)`
  font-size: 18px;
  line-height: 130%;
  color: ${(props) => props.theme.main.colors.black};
  margin: 64px 0 0;
  padding: 0 50px 0 0;
  max-width: 400px;
  position: relative;
  z-index: 2;
  @media screen and (max-width: ${adaptive.laptopL}) {
    margin: 30px 0 0;
  }
  @media screen and (max-width: ${adaptive.mobileEnd}) {
    font-size: 16px;
    padding: 0;
    margin: 30px 0 0;
  }
  @media screen and (max-width: ${adaptive.mobileL}) {
    font-size: 12px;
    margin: 23px 0 0;
  }
`;

export const ShowcaseButton = styled(ButtonBase)`
  &.MuiButtonBase-root {
    align-self: start;
    height: 66px;
    background: ${(props) => props.theme.main.colors.blue};
    font-family: ${(props) => props.theme.main.fonts.secondary};
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    line-height: 110%;
    color: ${(props) => props.theme.main.colors.white};
    border-radius: 10px;
    margin: 25px auto 0 0;
    padding: 0 25px;
    position: relative;
    z-index: 2;
    @media screen and (max-width: ${adaptive.mobileEnd}) {
      font-size: 20px;
      height: 55px;
      padding: 0 20px;
    }
    @media screen and (max-width: ${adaptive.mobileL}) {
      font-size: 16px;
      height: 48px;
      padding: 0 16px;
      margin: 15px auto 0 0;
    }
    &:hover {
      .MuiTouchRipple-root {
        background: rgba(255, 255, 255, 0.2);
      }
    }
    .MuiTouchRipple-root {
      transition: background 0.2s;
    }
  }
`;

export const ShowcasePics = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  z-index: 2;
  @media screen and (max-width: ${adaptive.laptopL}) {
    width: 100%;
    max-width: 668px;
    margin: 100px auto 0;
  }
  @media screen and (max-width: ${adaptive.mobileL}) {
    margin: 55px auto 0;
  }
  picture {
    &:nth-of-type(1) {
      margin-left: auto;
      width: 505px;
      height: 645px;
      @media screen and (max-width: ${adaptive.mobileEnd}) {
        margin: 0 auto 0 0;
        width: 391px;
        height: 500px;
      }
      @media screen and (max-width: ${adaptive.mobileL}) {
        margin: 0 auto 0 0;
        width: 239px;
        height: 306px;
      }
    }
    &:nth-of-type(2) {
      margin-top: -144px;
      width: 450px;
      height: 288px;
      @media screen and (max-width: ${adaptive.mobileEnd}) {
        display: none;
      }
    }
    &:nth-of-type(3) {
      margin-top: 19px;
      margin-left: auto;
      transform: translateX(50%);
      width: 372px;
      height: 418px;
      @media screen and (max-width: ${adaptive.laptop}) {
        transform: translateX(100px);
      }
      @media screen and (max-width: ${adaptive.mobileEnd}) {
        transform: none;
        margin-top: -100px;
        width: 325px;
        height: 365px;
      }
      @media screen and (max-width: ${adaptive.mobileL}) {
        margin: 24px 0 0 130px;
        width: 180px;
        height: 202px;
      }
    }
  }
`;

type ShowcaseLinesProps = {
  currentSectionIsRevealed: boolean;
  beneathSectionIsRevealed: boolean;
};

export const ShowcaseLines = styled.div<ShowcaseLinesProps>`
  svg {
    &.showcase-line-1 {
      position: absolute;
      z-index: 1;
      top: -33px;
      @media screen and (min-width: ${adaptive.tabletStart}) {
        right: -137px;
      }
      @media screen and (max-width: ${adaptive.mobileEnd}) {
        left: -800px;
        z-index: 3;
        height: 600px;
        width: auto;
      }
      @media screen and (max-width: ${adaptive.mobileL}) {
        width: auto;
        height: 360px;
        left: -30px;
        top: -15px;
      }
      path {
        stroke-dashoffset: -3055;
        stroke-dasharray: 3055;
        ${(props) =>
          props.currentSectionIsRevealed &&
          css`
            animation: ${strokeAnimation} 2s 1s linear forwards;
          `}

        @media screen and (max-width: ${adaptive.laptopL}) {
          animation-delay: 0s;
        }
        @media screen and (min-width: ${adaptive.mobileL}) and (max-width: ${adaptive.mobileEnd}) {
          stroke-dashoffset: -1475;
          stroke-dasharray: 1475;
          ${(props) =>
            props.currentSectionIsRevealed &&
            css`
              animation: ${strokeMobShowcaseLine1Animation} 1s 1s linear
                forwards;
            `}
        }
        @media screen and (max-width: ${adaptive.mobileL}) {
          stroke-dashoffset: -1465;
          stroke-dasharray: 1465;
          animation-duration: 2s;
          animation-delay: 1s;
        }
      }
    }
    &.showcase-line-2 {
      position: absolute;
      z-index: 1;
      bottom: 150px;
      right: -145px;
      @media screen and (max-width: ${adaptive.mobileEnd}) {
        left: 0;
        height: 450px;
        width: auto;
      }
      @media screen and (max-width: ${adaptive.mobileL}) {
        width: auto;
        height: 190px;
        left: -30px;
      }
      path {
        stroke-dashoffset: 1066;
        stroke-dasharray: 1066;
        ${(props) =>
          props.currentSectionIsRevealed &&
          css`
            animation: ${strokeAnimation} 0.7s 3.3s linear forwards;
          `}
        @media screen and (max-width: ${adaptive.laptopL}) {
          animation-delay: 2.3s;
        }
        @media screen and (max-width: ${adaptive.mobileEnd}) {
          animation-delay: 2.2s;
        }
        @media screen and (max-width: ${adaptive.mobileL}) {
          animation-delay: 1.8s;
          animation-duration: 0.6s;
          stroke-dashoffset: 360;
          stroke-dasharray: 360;
        }
      }
    }
    &.showcase-line-3 {
      position: absolute;
      z-index: 3;
      top: 245px;
      @media screen and (min-width: ${adaptive.mobileM}) {
        right: 0;
      }
      @media screen and (max-width: ${adaptive.mobileM}) {
        display: none;
      }
      path {
        stroke-dashoffset: 575;
        stroke-dasharray: 575;
        ${(props) =>
          props.currentSectionIsRevealed &&
          css`
            animation: ${strokeAnimation} 0.4s 2.2s linear forwards;
          `}
        @media screen and (max-width: ${adaptive.laptopL}) {
          animation-delay: 1.2s;
        }
      }
    }
    &.showcase-line-4 {
      position: absolute;
      z-index: 1;
      @media screen and (max-width: ${adaptive.mobileL}) {
        bottom: -165px;
        left: 235px;
      }
      path {
        @media screen and (max-width: ${adaptive.mobileL}) {
          stroke-dashoffset: 475;
          stroke-dasharray: 475;
          ${(props) =>
            props.currentSectionIsRevealed &&
            css`
              animation: ${strokeAnimation} 0.7s 2.6s linear forwards;
            `}
        }
      }
    }
    &.heart-line {
      position: absolute;
      z-index: 1;
      top: calc(100% - 140px);
      right: -335px;
      @media screen and (max-width: 1740px) {
        right: -395px;
      }
      path {
        stroke-dasharray: 6400;
        stroke-dashoffset: 6400;
        ${(props) =>
          props.beneathSectionIsRevealed &&
          css`
            animation: ${strokeAnimation} 5s 0.5s linear forwards;
          `}
        @media screen and (max-width: ${adaptive.laptopL}) {
          animation-delay: 3.3s;
        }
      }
    }
  }
`;

export const ShowcaseIcons = styled.div`
  svg {
    &.plane-svg {
      position: absolute;
      z-index: 1;
      left: -300px;
      top: 0;
      @media screen and (max-width: ${adaptive.desktop}) and (min-width: ${adaptive.laptopL}) {
        left: -260px;
      }
      @media screen and (max-width: ${adaptive.laptopL}) {
        left: 100%;
        transform: translateX(-100%);
      }
      @media screen and (max-width: ${adaptive.mobileEnd}) {
        display: none;
      }
      path.stroke-line {
        fill: none;
        stroke-dashoffset: -882;
        stroke-dasharray: 882;
        animation: ${planeAnimation} 1s 0.5s linear forwards;
      }
      path.bg-line {
        opacity: 0;
        animation: ${fadeAnimation} 1s 0.5s linear forwards;
      }
    }
  }
`;
