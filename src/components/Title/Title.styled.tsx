import styled, { css } from "styled-components";
import { LandingSectionEnum } from "../../enums";
import { adaptive } from "../../utils";
import { TitleProps } from "./Title";

export default styled.h2<Pick<TitleProps, "type">>`
  font-family: ${(props) => props.theme.main.fonts.primary};
  font-style: normal;
  font-weight: 700;
  font-size: 52px;
  line-height: 110%;
  color: ${(props) => props.theme.main.colors.black};
  margin: 0;
  position: relative;
  z-index: 2;
  @media screen and (max-width: ${adaptive.laptop}) {
    font-size: 44px;
  }
  @media screen and (max-width: ${adaptive.mobileEnd}) {
    font-size: 24px;
    font-weight: 600;
  }
  strong {
    display: block;
    font-size: 94px;
    line-height: 110%;
    color: ${(props) => props.theme.main.colors.blue};
    @media screen and (max-width: ${adaptive.laptop}) {
      font-size: 64px;
    }
    @media screen and (max-width: ${adaptive.mobileEnd}) {
      font-size: 34px;
    }
  }
  /* Ecosystem */
  ${(props) =>
    props?.type === LandingSectionEnum.Ecosystem &&
    css`
      margin: 0 0 100px;
      @media screen and (max-width: ${adaptive.mobileEnd}) {
        margin: 0 0 60px;
      }
      strong {
        line-height: 0.7;
        @media screen and (max-width: ${adaptive.mobileEnd}) {
          line-height: 1.1;
        }
      }
    `}
  /* Internships */
  ${(props) =>
    props?.type === LandingSectionEnum.Internships &&
    css`
      line-height: 0.9;
      margin: 0 0 64px;
      @media screen and (max-width: ${adaptive.mobileEnd}) {
        margin: 0 0 25px;
      }
    `}
  /* Stories */
  ${(props) =>
    props?.type === LandingSectionEnum.Stories &&
    css`
      color: ${(props) => props.theme.main.colors.white};
      margin: 0 0 90px;
      line-height: 120%;
      @media screen and (max-width: ${adaptive.laptopL}) {
        margin: 0 0 120px;
        width: calc(100% - 450px);
      }
      @media screen and (max-width: ${adaptive.tabletEnd}) {
        width: calc(100% - 385px);
      }
      @media screen and (max-width: ${adaptive.mobileEnd}) {
        margin: 0 0 62px;
        width: 100%;
      }
      br {
        @media screen and (max-width: ${adaptive.laptopL}) {
          display: none;
        }
      }
    `}
  /* FAQ */
  ${(props) =>
    props?.type === LandingSectionEnum.Faq &&
    css`
      margin: 0 0 70px;
      @media screen and (max-width: ${adaptive.laptopL}) {
        margin: 0 0 35px;
      }
      strong {
        color: ${(props) => props.theme.main.colors.black};
      }
    `}
  /* Showcase */
  ${(props) =>
    props?.type === LandingSectionEnum.Showcase &&
    css`
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
    `}
  /* Footer */
  ${(props) =>
    props?.type === LandingSectionEnum.Footer &&
    css`
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
    `}
`;
