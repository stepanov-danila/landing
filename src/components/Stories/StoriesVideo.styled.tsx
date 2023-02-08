import styled from "styled-components";
import ButtonBase from "@mui/material/ButtonBase";
import { adaptive } from "../../utils";

export default styled.div`
  position: relative;
  z-index: 2;
`;

export const StoriesVideoPlayer = styled.div``;

export const StoriesVideoCard = styled.div`
  min-height: 380px;
  max-width: 590px;
  position: relative;
  display: flex;
  border-radius: 20px;
  overflow: hidden;
  background: ${(props) => props.theme.main.colors.white};
  margin: 0 auto;
  @media screen and (max-width: ${adaptive.laptopL}) {
    flex-direction: column;
  }
`;

export const StoriesVideoPlayBtn = styled(ButtonBase)`
  &.MuiButtonBase-root {
    border-radius: 50%;
    position: absolute;
    z-index: 3;
    top: calc(50% - 10px);
    left: calc(50% + 30px);
    transform: translate(-50%, -50%);
    color: ${(props) => props.theme.main.colors.white};
    @media screen and (max-width: ${adaptive.laptopL}) {
      order: 2;
      position: relative;
      top: unset;
      left: unset;
      transform: none;
      align-self: center;
      flex-shrink: 0;
      margin-top: -50px;
    }
    @media screen and (max-width: ${adaptive.mobileL}) {
      margin-top: -40px;
    }
    &:hover {
      svg {
        circle {
          fill: ${(props) => props.theme.main.colors.orange};
        }
      }
    }
    svg {
      height: 100px;
      width: 100px;
      @media screen and (max-width: ${adaptive.laptopL}) {
        order: 3;
      }
      @media screen and (max-width: ${adaptive.mobileL}) {
        height: 80px;
        width: 80px;
      }
      circle {
        transition: fill 0.3s;
      }
    }
  }
`;

export const StoriesVideoText = styled.div`
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  padding: 80px 50px 50px 60px;
  position: relative;
  z-index: 2;
  width: 100%;
  @media screen and (max-width: ${adaptive.laptopL}) {
    order: 3;
    padding: 30px 40px 60px;
  }
  @media screen and (max-width: ${adaptive.mobileL}) {
    padding: 25px 30px 40px;
  }
  h3,
  h4,
  p {
    position: relative;
    z-index: 2;
  }
  h3 {
    font-family: ${(props) => props.theme.main.fonts.primary};
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 120%;
    color: ${(props) => props.theme.main.colors.gray};
    margin: 0;
    max-width: 220px;
    @media screen and (max-width: ${adaptive.laptopL}) {
      max-width: 100%;
    }
    @media screen and (max-width: ${adaptive.mobileL}) {
      font-size: 20px;
    }
  }
  h4 {
    font-family: ${(props) => props.theme.main.fonts.secondary};
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 120%;
    color: ${(props) => props.theme.main.colors.gray};
    margin: 10px 0 auto;
    max-width: 195px;
    @media screen and (max-width: ${adaptive.laptopL}) {
      max-width: 100%;
      margin: 5px 0 auto;
    }
    @media screen and (max-width: ${adaptive.mobileL}) {
      font-size: 16px;
    }
  }
  p {
    font-family: ${(props) => props.theme.main.fonts.secondary};
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 150%;
    color: ${(props) => props.theme.main.colors.gray};
    margin: auto 0 0;
    max-width: 195px;
    @media screen and (max-width: ${adaptive.laptopL}) {
      max-width: 100%;
      margin: 20px 0 0;
    }
    @media screen and (max-width: ${adaptive.mobileL}) {
      font-size: 12px;
    }
  }
`;

export const StoriesVideoPic = styled.picture`
  width: 310px;
  height: 100%;
  flex-shrink: 0;
  /* margin-left: -157px; */
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  z-index: 1;
  background: ${(props) => props.theme.main.colors.white};
  flex-shrink: 0;
  display: flex;
  justify-content: flex-end;
  @media screen and (max-width: ${adaptive.laptopL}) {
    position: relative;
    top: unset;
    right: unset;
    height: 400px;
    width: 100%;
    justify-content: center;
    order: 1;
  }
  @media screen and (max-width: ${adaptive.mobileL}) {
    height: 200px;
  }
  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
`;

export const StyledStoriesVideoCardLineActiveCurrentSvg = styled.svg`
  position: absolute;
  z-index: 3;
  top: 0;
  left: 0;

  .slick-slide:not(.slick-current) & {
    display: none;
  }

  @media screen and (max-width: ${adaptive.laptopL}) {
    display: none;
  }
`;

export const StyledStoriesVideoCardLineActiveNotCurrentSvg = styled.svg`
  position: absolute;
  z-index: 3;
  top: 0;
  left: 0;

  .slick-slide.slick-current &,
  .slick-slide:not(.slick-active) & {
    display: none;
  }

  @media screen and (max-width: ${adaptive.laptopL}) {
    display: none;
  }
`;
export const StyledStoriesVideoCardBgSvg = styled.svg`
  position: absolute;
  z-index: 1;
  top: 0;
  bottom: 0;
  right: 210px;
  @media screen and (max-width: ${adaptive.laptopL}) {
    display: none;
  }
`;
