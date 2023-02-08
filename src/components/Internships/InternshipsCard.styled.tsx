import { ButtonBase, ButtonBaseProps } from "@mui/material";
import styled, { css } from "styled-components";
import { InternshipsCardTypeEnum, InternshipsGridTypeEnum } from "../../enums";
import { adaptive } from "../../utils";
import { InternshipsCardProps } from "./InternshipsCard";

type StyledCardProps = ButtonBaseProps &
  Pick<InternshipsCardProps, "cardType" | "gridType">;

export default styled(ButtonBase)<StyledCardProps>`
  &.MuiButtonBase-root {
    padding: 60px 35px;
    background: ${(props) => props.theme.main.colors.blue};
    color: ${(props) => props.theme.main.colors.white};
    min-height: 284px;
    min-width: 144px;
    border-radius: 20px;
    position: relative;
    z-index: 2;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    text-align: left;
    transition: background 0.2s;
    &:nth-child(3) {
      background: ${(props) => props.theme.main.colors.orange};
    }
    &:hover {
      .MuiTouchRipple-root {
        background: rgba(255, 255, 255, 0.2);
      }
    }
    /* Small */
    ${(props) =>
      props.cardType === InternshipsCardTypeEnum.Small &&
      css`
        width: 310px;
      `}
    /* Medium */
    ${(props) =>
      props.cardType === InternshipsCardTypeEnum.Middle &&
      css`
        width: 496px;
      `}
    /* Large */
    ${(props) =>
      props.cardType === InternshipsCardTypeEnum.Big &&
      css`
        width: 680px;
      `}
    /* Small Grid */
    ${(props) =>
      props.gridType === InternshipsGridTypeEnum.Small &&
      css`
        &:nth-child(2),
        &:nth-child(3) {
          picture {
            display: none;
          }
        }
      `}
  @media screen and (max-width: ${adaptive.laptopL}) {
      width: 100%;
    }
    ${(props) =>
      (props.cardType === InternshipsCardTypeEnum.Big ||
        props.cardType === InternshipsCardTypeEnum.Middle) &&
      css`
        @media screen and (max-width: ${adaptive.mobileL}) {
          grid-column: 1 / span 2;
        }
      `}
    @media screen and (max-width: ${adaptive.mobileEnd}) {
      padding: 30px 20px;
      min-height: 220px;
    }
    @media screen and (max-width: ${adaptive.mobileL}) {
      padding: 36px 24px 32px;
      min-height: 184px;
    }
  }
  h3 {
    color: inherit;
    max-width: 200px;
    margin: 0;
    font-family: ${(props) => props.theme.main.fonts.primary};
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 110%;
    position: relative;
    z-index: 2;
    @media screen and (max-width: ${adaptive.mobileEnd}) {
      font-size: 20px;
    }
    @media screen and (max-width: ${adaptive.mobileL}) {
      font-size: 14px;
      max-width: 166px;
    }
    @media screen and (max-width: ${adaptive.mobileL}) {
    }
  }
  p {
    color: inherit;
    max-width: 200px;
    margin: 15px 0 16px;
    font-family: ${(props) => props.theme.main.fonts.secondary};
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 150%;
    position: relative;
    z-index: 2;
    @media screen and (max-width: ${adaptive.mobileL}) {
      font-size: 10px;
      margin: 10px 0 16px;
    }
    @media screen and (max-width: ${adaptive.mobileL}) {
      max-width: 166px;
    }
  }
  picture {
    svg {
      position: absolute;
      z-index: 1;
      left: 0;
      bottom: 15px;
      min-width: 100%;
      height: auto;
      min-width: 100%;
      @media screen and (max-width: ${adaptive.laptop}) and (min-width: 581px) {
        display: none;
      }
      @media screen and (max-width: ${adaptive.laptopL}) {
        transform: translateX(-50%);
        left: 50%;
      }
      @media screen and (max-width: ${adaptive.mobileL}) {
        max-height: 150px;
      }
      /* ${(props) =>
        props.cardType === InternshipsCardTypeEnum.Small &&
        css`
          min-width: 310px;
        `}
      ${(props) =>
        props.cardType === InternshipsCardTypeEnum.Middle &&
        css`
          min-width: 496px;
        `}
      ${(props) =>
        props.cardType === InternshipsCardTypeEnum.Big &&
        css`
          min-width: 680px;
        `} */
      ${(props) =>
        props.cardType === InternshipsCardTypeEnum.Small &&
        css`
          @media screen and (min-width: ${adaptive.desktopStart}),
            screen and (max-width: ${adaptive.mobileL}) {
            display: none;
          }
        `}
    }
  }
  i {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    z-index: 2;
    border-radius: 16px;
    color: ${(props) => props.theme.main.colors.white};
    border: 2px solid ${(props) => props.theme.main.colors.white};
    height: 32px;
    width: 32px;

    justify-content: flex-end;
    margin: auto 0 0;
    position: relative;
    @media screen and (max-width: ${adaptive.mobileL}) {
      height: 20px;
      width: 20px;
      border-width: 1px;
    }

    svg {
      height: 32px;
      width: 33px;
      flex-shrink: 0;
      position: absolute;
      top: -2px;
      left: -3px;
      @media screen and (max-width: ${adaptive.mobileL}) {
        top: -1px;
        left: -1px;
        height: 20px;
        width: 20px;
      }
    }
  }
  .MuiTouchRipple-root {
    transition: background 0.2s;
  }
`;
