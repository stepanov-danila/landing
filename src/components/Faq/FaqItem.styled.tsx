import styled, { css } from "styled-components";
import { adaptive } from "../../utils";

type StyledFaqItemProps = {
  expanded: boolean;
};

export default styled.div<StyledFaqItemProps>`
  border-bottom: 1px solid #c4d4da;
  padding: 28px 0;
  @media screen and (max-width: ${adaptive.mobileEnd}) {
    padding: 18px 0;
  }
  &:first-child {
    border-top: 1px solid #c4d4da;
  }
  header {
    display: flex;
    align-items: center;
    position: relative;
  }
  h3 {
    margin: 0;
    font-family: ${(props) => props.theme.main.fonts.secondary};
    font-style: normal;
    font-weight: 600;
    font-size: 22px;
    line-height: 140%;
    color: ${(props) => props.theme.main.colors.black};
    padding-right: 60px;
    flex-grow: 1;
    @media screen and (max-width: ${adaptive.laptopL}) {
      font-size: 18px;
    }
    @media screen and (max-width: ${adaptive.mobileEnd}) {
      font-size: 12px;
    }
  }
  button.MuiButtonBase-root {
    height: 55px;
    width: 55px;
    color: ${(props) =>
      props.expanded
        ? props.theme.main.colors.orange
        : props.theme.main.colors.blue};
    border-radius: 50%;
    flex-shrink: 0;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 0;
    @media screen and (max-width: ${adaptive.mobileEnd}) {
      width: 34px;
      height: 34px;
    }
    &:hover {
      ${(props) =>
        !props.expanded &&
        css`
          background: rgba(0, 154, 225, 0.15);
        `};
      svg {
        path {
          &[fill-opacity="0.15"] {
            fill-opacity: 0.2;
          }
        }
      }
    }
    svg {
      max-width: 100%;
      height: auto;
      @media screen and (max-width: ${adaptive.mobileEnd}) {
        ${(props) =>
          props.expanded
            ? css`
                width: 34px;
                height: 34px;
              `
            : css`
                width: 24px;
                height: 24px;
              `}
      }
    }
  }
  p {
    margin: 10px 0;
    font-family: ${(props) => props.theme.main.fonts.secondary};
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 150%;
    color: ${(props) => props.theme.main.colors.black};
    @media screen and (max-width: ${adaptive.mobileEnd}) {
      font-size: 10px;
    }
    a {
      font-family: inherit;
      font-style: inherit;
      font-weight: inherit;
      font-size: inherit;
      line-height: inherit;
      text-decoration: none;
      color: ${(props) => props.theme.main.colors.blue};
      &:hover {
        text-decoration: underline;
      }
    }
  }
`;
