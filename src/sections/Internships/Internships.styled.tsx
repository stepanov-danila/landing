import styled from "styled-components";
import { adaptive } from "../../utils";

export const InternshipsBgHeight = 2261;

export default styled.div`
  margin-top: 185px;
  padding-top: 20px;
  overflow-x: hidden;
  overflow-y: visible;
  @media screen and (max-width: ${adaptive.laptopL}) {
    margin-top: 100px;
  }
  @media screen and (max-width: ${adaptive.mobileEnd}) {
    margin-top: -30px;
  }
`;
