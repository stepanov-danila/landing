import styled from "styled-components";
import { adaptive } from "../../utils";

export default styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 110px;
  grid-row-gap: 40px;
  align-items: start;
  position: relative;
  z-index: 2;
  @media screen and (max-width: ${adaptive.laptopL}) {
    grid-column-gap: 80px;
  }
  @media screen and (max-width: ${adaptive.laptop}) {
    grid-column-gap: 60px;
  }
  @media screen and (max-width: ${adaptive.mobileEnd}) {
    grid-template-columns: 1fr;
  }
`;
