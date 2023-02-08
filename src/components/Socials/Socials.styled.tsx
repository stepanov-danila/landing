import styled from "styled-components";
import ButtonBase from "@mui/material/ButtonBase";
import Text from "../../components/Text/Text.styled";
import { adaptive } from "../../utils";

export default styled.div`
  /* @media screen and (max-width: ${adaptive.laptopL}) {
    margin: 40px 0 0;
  } */
  @media screen and (max-width: ${adaptive.laptopM}) {
    margin: 50px 0 0;
  }
  @media screen and (max-width: ${adaptive.mobileEnd}) {
    margin: 38px 0 0;
  }
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    position: relative;
    z-index: 2;
    @media screen and (max-width: ${adaptive.mobileEnd}) {
      margin: 20px 0 0;
    }
    li {
      list-style: none;
      margin: 0;
      padding: 0;
      & + li {
        margin-left: 25px;
        @media screen and (max-width: ${adaptive.mobileEnd}) {
          margin-left: 20px;
        }
      }
    }
  }
`;

export const SocialsItem = styled(ButtonBase)`
  &.MuiButtonBase-root {
    border-radius: 50%;
    color: ${(props) => props.theme.main.colors.white};
    &:hover .MuiTouchRipple-root {
      background: rgba(255, 255, 255, 0.1);
    }
    svg {
      @media screen and (max-width: ${adaptive.mobileEnd}) {
        height: 85px;
        width: auto;
      }
    }
    .MuiTouchRipple-root {
      transition: background 300ms;
    }
  }
`;

export const SocialsText = styled(Text)`
  margin: 0 0 35px;
  @media screen and (max-width: ${adaptive.laptopL}) {
    margin: 0 0 15px;
  }
  @media screen and (max-width: ${adaptive.mobileEnd}) {
    font-size: 12px;
    margin: 0 0 22px;
  }
`;
