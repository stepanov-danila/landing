import styled from "styled-components";
import { adaptive } from "../../utils";

export default styled.div`
  height: 100%;
  min-height: 403px;
  padding: 50px;
  background: ${(props) => props.theme.main.colors.white};
  border-radius: 20px;
  display: grid;
  grid-template-columns: 192px auto 1fr;
  grid-template-rows: auto 1fr;
  align-items: flex-start;
  position: relative;
  @media screen and (max-width: ${adaptive.laptopL}) {
    grid-template-rows: auto auto 1fr;
    grid-template-columns: auto 1fr;
    padding: 40px;
    min-height: 380px;
  }
  @media screen and (max-width: ${adaptive.mobileL}) {
    padding: 32px 24px 40px;
  }

  .slick-active & {
    box-shadow: 0px 6px 25px rgba(0, 0, 0, 0.1);
  }
  svg {
    position: absolute;
    z-index: 1;
    top: 20px;
    left: 155px;
    @media screen and (max-width: ${adaptive.laptopL}) {
      left: 50%;
      margin-left: 30px;
      top: 15px;
    }
  }
  picture {
    grid-row: 1 / span 2;
    grid-column: 1;
    padding-right: 47px;
    @media screen and (max-width: ${adaptive.laptopL}) {
      padding: 0;
      grid-row: 1;
      grid-column: 1 / span 2;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    @media screen and (max-width: ${adaptive.mobileEnd}) {
      margin-bottom: 23px;
    }
    img {
      max-width: 100%;
      max-width: 100%;
      height: 145px;
      width: 145px;
      object-fit: cover;
      border-radius: 50%;
      @media screen and (max-width: ${adaptive.mobileEnd}) {
        height: 104px;
        width: 104px;
      }
    }
  }
  strong {
    grid-row: 1;
    grid-column: 2;
    font-family: ${(props) => props.theme.main.fonts.primary};
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 120%;
    color: ${(props) => props.theme.main.colors.gray};
    align-self: center;
    @media screen and (max-width: ${adaptive.laptopL}) {
      grid-row: 2;
      grid-column: 1;
    }
    @media screen and (max-width: ${adaptive.mobileEnd}) {
      font-size: 14px;
    }
  }
  span {
    grid-row: 1;
    grid-column: 3;
    font-family: ${(props) => props.theme.main.fonts.secondary};
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 120%;
    color: ${(props) => props.theme.main.colors.gray};
    align-self: center;
    margin-left: 5px;
    @media screen and (max-width: ${adaptive.laptopL}) {
      grid-row: 2;
      grid-column: 2;
    }
    @media screen and (max-width: ${adaptive.mobileEnd}) {
      font-size: 12px;
    }
  }
  p {
    grid-row: 2;
    grid-column: 2 / span 3;
    padding: 0;
    margin: 20px 0 0;
    font-family: ${(props) => props.theme.main.fonts.secondary};
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 150%;
    color: ${(props) => props.theme.main.colors.gray};
    @media screen and (max-width: ${adaptive.laptopL}) {
      grid-row: 3;
      grid-column: 1 / span 2;
    }
    @media screen and (max-width: ${adaptive.mobileEnd}) {
      font-size: 10px;
      margin: 7px 0 0;
    }
  }
`;
