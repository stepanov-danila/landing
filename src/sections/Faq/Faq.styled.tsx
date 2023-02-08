import styled from "styled-components";
import { adaptive } from "../../utils";

export default styled.div`
  margin-top: 138px;
  padding-top: 20px;
  position: relative;
  z-index: 2;
  @media screen and (max-width: ${adaptive.laptopL}) {
    margin-top: 100px;
  }
  @media screen and (max-width: ${adaptive.mobileEnd}) {
    margin-top: 80px;
  }
`;
