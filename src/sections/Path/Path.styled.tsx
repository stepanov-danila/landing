import styled from "styled-components";
import { adaptive } from "../../utils";

export default styled.div`
  margin-top: 266px;
  padding-top: 20px;
  @media screen and (max-width: ${adaptive.laptopL}) {
    margin-top: 180px;
  }
  @media screen and (max-width: ${adaptive.laptop}) {
    margin-top: 100px;
  }
  @media screen and (max-width: ${adaptive.mobileEnd}) {
    margin-top: 80px;
  }
`;
