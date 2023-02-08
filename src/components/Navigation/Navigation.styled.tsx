import styled, { css } from "styled-components";
import { LandingSectionEnum } from "../../enums";
import { adaptive } from "../../utils";

type StyledProps = {
  activeSection: LandingSectionEnum;
};

export default styled.nav<StyledProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  top: 100px;
  position: fixed;
  z-index: 50;
  right: 20px;
  a {
    display: block;
    width: 13px;
    height: 13px;
    border-radius: 50%;
    background: rgba(51, 204, 255, 0.3);
    box-shadow: 0 0 0 1px ${(props) => props.theme.main.colors.white};
    &:hover {
      background: ${(props) => props.theme.main.colors.blue};
    }
    &[data-active="true"] {
      background: ${(props) => props.theme.main.colors.blue};
      transform: scale(2);
    }
    & + a {
      margin-top: 20px;
    }
  }
`;
