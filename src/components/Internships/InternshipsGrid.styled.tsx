import styled from "styled-components";
import { adaptive } from "../../utils";

export default styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  gap: 60px;
  position: relative;
  z-index: 2;
  @media screen and (max-width: ${adaptive.laptopL}) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 30px;
  }
  @media screen and (max-width: ${adaptive.mobileEnd}) {
    gap: 20px;
  }
  @media screen and (max-width: ${adaptive.mobileL}) {
    grid-template-columns: 1fr 1fr;
    row-gap: 24px;
    column-gap: 12px;
  }
`;
