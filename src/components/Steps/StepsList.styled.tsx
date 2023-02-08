import styled from "styled-components";
import { adaptive } from "../../utils";

export default styled.div`
  margin-top: 45px;
  display: grid;
  @media screen and (min-width: ${adaptive.tabletStart}) {
    grid-template-columns: 1fr 1fr;
    grid-gap: 50px;
  }
  @media screen and (max-width: ${adaptive.mobileEnd}) {
    grid-template-columns: 1fr;
    grid-gap: 90px;
  }
`;
