import styled, { css } from "styled-components";
import Container from "../../components/Container/Container.styled";
import Title from "../../components/Title/Title.styled";
import Copyright from "../../components/Text/Copyright.styled";
import { strokeAnimation } from "../../components/Animations/Animations";
import { adaptive } from "../../utils";

export default styled.footer`
  background: ${(props) => props.theme.main.colors.orange};
  padding: 96px 0 60px;
  height: 525px;
  margin-top: 185px;
  position: relative;

  @media screen and (max-width: ${adaptive.laptopL}) {
    height: auto;
    min-height: 500px;
    padding: 60px 0;
    display: flex;
    flex-direction: column;
    margin-top: 100px;
  }
  @media screen and (max-width: ${adaptive.mobileEnd}) {
    padding: 40px 0 20px;
    min-height: 300px;
    margin-top: 50px;
  }
`;

type StyledFooterContainerProps = {
  showAnimation: boolean;
};

export const FooterContainer = styled(Container)<StyledFooterContainerProps>`
  display: grid;
  justify-content: space-between;
  grid-template-columns: auto auto;
  grid-column-gap: 40px;
  /* grid-template-rows: auto auto auto; */
  @media screen and (max-width: ${adaptive.laptopL}) {
    flex-grow: 1;
    padding-right: 200px;
  }
  @media screen and (max-width: ${adaptive.laptopM}) {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
  }
  @media screen and (max-width: ${adaptive.mobileEnd}) {
    padding-right: 20px;
  }
  & > svg {
    position: absolute;
    z-index: 1;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    @media screen and (max-width: ${adaptive.laptopL}) {
      width: auto;
      height: 500px;
      left: unset;
      transform: none;
      right: 0;
    }
    @media screen and (max-width: ${adaptive.mobileEnd}) {
      height: auto;
      bottom: unset;
      top: 0;
    }
    path {
      &[stroke] {
        @media screen and (max-width: ${adaptive.laptopL}) {
          stroke-dashoffset: 620;
          stroke-dasharray: 620;
          ${(props) =>
            props.showAnimation &&
            css`
              animation: ${strokeAnimation} 2s 0.5s linear forwards;
            `}
        }
        @media screen and (max-width: ${adaptive.mobileEnd}) {
          animation-duration: 1s;
        }
      }
      &.stroke-1 {
        stroke-dashoffset: 1664;
        stroke-dasharray: 1664;
        ${(props) =>
          props.showAnimation &&
          css`
            animation: ${strokeAnimation} 1s 0.5s linear forwards;
          `}
        @media screen and (max-width: ${adaptive.laptopL}) {
          display: none;
        }
      }
      &.stroke-2 {
        stroke-dashoffset: 1315;
        stroke-dasharray: 1315;
        ${(props) =>
          props.showAnimation &&
          css`
            animation: ${strokeAnimation} 1s 1.4s linear forwards;
          `}
      }
    }
  }
`;

export const FooterTitle = styled(Title)`
  color: ${(props) => props.theme.main.colors.white};
  margin: 0 0 50px;
  grid-column: 1 / span 2;
  position: relative;
  z-index: 2;
  @media screen and (max-width: ${adaptive.laptopL}) {
    margin: 0 0 40px;
  }
  @media screen and (max-width: ${adaptive.mobileEnd}) {
    margin: 0 0 28px;
  }
`;

export const FooterCopyright = styled(Copyright)`
  grid-column: 1 / span 2;
  margin: 60px 0 0;
  position: relative;
  z-index: 2;
  @media screen and (max-width: ${adaptive.laptopL}) {
    margin: 50px 0 0;
  }
  @media screen and (max-width: ${adaptive.mobileEnd}) {
    margin: 40px 0 0;
    font-size: 10px;
  }
`;
