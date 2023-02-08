import styled from "styled-components";
import { adaptive } from "../../utils";

export default styled.div`
  padding-top: 20px;
  @media screen and (min-width: ${adaptive.desktopStart}) {
    margin-top: 125px;
  }
  @media screen and (max-width: ${adaptive.laptopL}) {
    margin-top: 80px;
  }
  @media screen and (max-width: ${adaptive.mobileEnd}) {
    margin-top: 55px;
  }
`;
