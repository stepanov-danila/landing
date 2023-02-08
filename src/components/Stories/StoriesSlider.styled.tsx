import ButtonBase from "@mui/material/ButtonBase";
import styled from "styled-components";
import { adaptive } from "../../utils";

export const StyledSliderarrow = styled(ButtonBase)`
  &.MuiButtonBase-root {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    color: ${({ theme }) => theme.main.colors.white};
    flex-shrink: 0;
    padding: 8px;
    &.slick-arrow {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      &.slick-prev {
        left: -100px;
        @media screen and (max-width: ${adaptive.desktop}) {
          left: -80px;
        }
      }
      &.slick-next {
        right: -100px;
        @media screen and (max-width: ${adaptive.desktop}) {
          right: -80px;
        }
      }
    }
    svg {
      height: 32px;
      width: auto;
      max-width: 100%;
      max-height: 100%;
    }
  }
`;

export default styled.div`
  position: relative;
  z-index: 2;
  @media screen and (max-width: ${adaptive.laptopL}) {
    width: 590px;
    max-width: 75vw;
  }
  @media screen and (max-width: ${adaptive.mobileEnd}) {
    width: 75vw;
    min-width: 290px;
    max-width: 590px;
  }

  .slick-slider {
    position: relative;
    box-sizing: border-box;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    -webkit-touch-callout: none;
    -khtml-user-select: none;
    -ms-touch-action: pan-y;
    touch-action: pan-y;
    -webkit-tap-highlight-color: transparent;
  }

  .slick-list {
    position: relative;
    display: flex;
    overflow: hidden;
    margin: 0 -30px;
    padding: 0;
    @media screen and (max-width: ${adaptive.laptopL}) {
      margin: 0 -10px;
      overflow: visible;
    }
  }

  .slick-list:focus {
    outline: 0;
  }

  .slick-list.dragging {
    cursor: pointer;
    cursor: hand;
  }

  .slick-slider .slick-list,
  .slick-slider .slick-track {
    -webkit-transform: translate3d(0, 0, 0);
    -moz-transform: translate3d(0, 0, 0);
    -ms-transform: translate3d(0, 0, 0);
    -o-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }

  .slick-track {
    position: relative;
    top: 0;
    left: 0;
    display: flex;
    margin-left: auto;
    margin-right: auto;
  }

  .slick-track:after {
    clear: both;
  }

  .slick-loading .slick-track {
    visibility: hidden;
  }

  .slick-slide {
    display: none;
    float: left;
    height: 100%;
    min-height: 1px;
    margin: 0 30px;
    @media screen and (max-width: ${adaptive.laptopL}) {
      margin: 0 10px;
    }
  }

  [dir="rtl"] .slick-slide {
    float: right;
  }

  .slick-slide > div {
    height: 100%;
  }

  .slick-slide img {
    display: block;
  }

  .slick-slide.slick-loading img {
    display: none;
  }

  .slick-slide.dragging img {
    pointer-events: none;
  }

  .slick-initialized .slick-slide {
    display: block;
  }

  .slick-loading .slick-slide {
    visibility: hidden;
  }

  .slick-vertical .slick-slide {
    display: block;
    height: auto;
    border: 1px solid transparent;
  }

  .slick-arrow.slick-hidden {
    display: none;
  }

  /*# sourceMappingURL=slick.min.css.map */
`;
