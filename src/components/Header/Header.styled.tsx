import styled from "styled-components";
import { adaptive } from "../../utils";

export default styled.header`
  div[data-testid="container"] {
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    @media screen and (max-width: ${adaptive.mobileL}) {
      height: 80px;
    }
  }
`;
