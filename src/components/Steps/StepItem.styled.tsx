import styled, { css } from "styled-components";
import { StepsItemIndexEnum } from "../../enums";
import { adaptive } from "../../utils";
import { StepsItemProps } from "./StepsItem";

export default styled.div<Pick<StepsItemProps, "index">>`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-wrap: wrap;
  @media screen and (min-width: ${adaptive.tabletStart}) {
    padding: 0 30px;
  }
  header {
    display: flex;
    align-items: center;
    @media screen and (max-width: ${adaptive.mobileEnd}) {
      padding: 0 30px;
    }
    @media screen and (max-width: ${adaptive.mobileM}) {
      width: 100%;
    }
    /* min-height: 60px; */
  }
  strong {
    width: 40px;
    height: 40px;
    border: 3px solid ${(props) => props.theme.main.colors.blue};
    border-radius: 50%;
    font-family: ${(props) => props.theme.main.fonts.primary};
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 110%;
    color: ${(props) => props.theme.main.colors.blue};
    display: flex;
    align-items: center;
    justify-content: center;
    grid-column: 1;
    grid-row: 1 / span 2;
    flex-shrink: 0;
    margin-right: 12px;
    span {
      transform: translateY(1px);
    }
  }
  hgroup {
    width: 250px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    @media screen and (max-width: ${adaptive.mobileM}) {
      width: 100%;
    }
  }
  h3 {
    font-family: ${(props) => props.theme.main.fonts.primary};
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 110%;
    color: ${(props) => props.theme.main.colors.black};
    margin: 0;
    @media screen and (max-width: ${adaptive.mobileM}) {
      max-width: 193px;
    }
  }
  h5 {
    font-family: ${(props) => props.theme.main.fonts.primary};
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 110%;
    color: ${(props) => props.theme.main.colors.black};
    margin: 4px 0 0;
  }
  picture {
    height: 300px;
    display: flex;
    align-items: center;
    align-self: center;
    justify-content: center;
    width: 100%;
    overflow: hidden;
    margin-top: 20px;
    position: relative;
    /* border-top: 1px solid #000;
    border-bottom: 1px solid #000; */
    ${(props) =>
      props.index === StepsItemIndexEnum.Resume &&
      css`
        height: 200px;
      `}
    ${(props) =>
      props.index === StepsItemIndexEnum.Search &&
      css`
        height: 225px;
      `}
      ${(props) =>
      props.index === StepsItemIndexEnum.Interview &&
      css`
        height: 210px;
      `}
      ${(props) =>
      props.index === StepsItemIndexEnum.Internship &&
      css`
        height: 190px;
      `}
      ${(props) =>
      props.index === StepsItemIndexEnum.Exam &&
      css`
        height: 220px;
      `}
      ${(props) =>
      props.index === StepsItemIndexEnum.Wellcome &&
      css`
        height: 250px;
      `}
    svg {
      position: absolute;
      left: 50%;
      transform: translate(-50%);
      width: 360px;
      height: auto;
      ${(props) =>
        props.index === StepsItemIndexEnum.Resume &&
        css`
          top: -110px;
        `}
      ${(props) =>
        props.index === StepsItemIndexEnum.Search &&
        css`
          top: 0;
        `}
      ${(props) =>
        props.index === StepsItemIndexEnum.Interview &&
        css`
          top: 0;
        `}
      ${(props) =>
        props.index === StepsItemIndexEnum.Internship &&
        css`
          top: -50px;
        `}
      ${(props) =>
        props.index === StepsItemIndexEnum.Exam &&
        css`
          top: 0;
        `}
      ${(props) =>
        props.index === StepsItemIndexEnum.Wellcome &&
        css`
          top: -85px;
        `}
      path.stroke-line {
      }
    }
  }
`;
