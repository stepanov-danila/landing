import styled from "styled-components";
import { InternshipsBgHeight } from "../../sections/Internships/Internships.styled";
import { adaptive } from "../../utils";
import { strokeAnimation } from "../Animations/Animations";

export default styled.picture`
  position: relative;
  margin: 0 -30px -40px;
  display: block;
  img {
    width: 100%;
    height: auto;
  }
  svg {
    z-index: 1;
    position: absolute;
    bottom: -100px;
    left: -45px;
    path {
      stroke-dasharray: 2440;
      stroke-dashoffset: 2440;
      animation: ${strokeAnimation} 3s 0s linear forwards;
    }
  }
`;
