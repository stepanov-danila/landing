import styled from "styled-components";
import { adaptive } from "../../utils";

export default styled.div`
  margin-top: 145px;
  background: ${(props) => props.theme.main.colors.blue};
  padding: 150px 0 138px;
  min-height: 904px;
  overflow: hidden;
  @media screen and (max-width: ${adaptive.laptopL}) {
    min-height: auto;
    padding: 100px 0 120px;
  }
  @media screen and (max-width: ${adaptive.mobileEnd}) {
    min-height: auto;
    padding: 87px 0 84px;
  }
`;
