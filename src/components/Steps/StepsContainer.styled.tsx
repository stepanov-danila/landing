import styled, { css } from "styled-components";
import { strokeAnimation } from "../Animations/Animations";

type StyledStepsContainer = {
  showAnimation: boolean;
};

export default styled.div<StyledStepsContainer>`
  margin-bottom: -620px;
  & > div {
    display: flex;
    justify-content: center;
  }
  svg {
    width: 1920px;
    height: auto;
    flex-shrink: 0;
    margin-top: -185px;
    path.stroke-line {
      stroke-dasharray: 7400;
      stroke-dashoffset: 7400;
      ${(props) =>
        props.showAnimation &&
        css`
          animation: ${strokeAnimation} 6s linear forwards;
        `}
    }
  }
`;
