import styled from "styled-components";
import Text from "../../components/Text/Text.styled";
import { adaptive } from "../../utils";

export default styled.div`
  position: relative;
  z-index: 2;
`;

export const ContactsText = styled(Text)`
  margin: 0 0 19px;
  @media screen and (max-width: ${adaptive.laptopL}) {
    margin: 0 0 20px;
  }
  @media screen and (max-width: ${adaptive.mobileEnd}) {
    font-size: 12px;
    margin: 0 0 15px;
  }
`;
