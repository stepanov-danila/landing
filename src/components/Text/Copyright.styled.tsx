import styled from "styled-components";
import { adaptive } from "../../utils";

export default styled.p`
  font-family: ${(props) => props.theme.main.fonts.secondary};
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 110%;
  color: ${(props) => props.theme.main.colors.white};
  margin: 0;
`;
