import StyledStepsContainer from "./StepsContainer.styled";
import { StepSvg } from "../Svg/Svg";
import Container from "../Container/Container";
import { useSectionIsRevealed } from "../../hooks";
import { LandingSectionEnum } from "../../enums";

const StepsContainer = () => {
  const stepsSectionIsRevealed = useSectionIsRevealed(LandingSectionEnum.Steps);

  return (
    <StyledStepsContainer showAnimation={stepsSectionIsRevealed}>
      <Container>
        <StepSvg />
      </Container>
    </StyledStepsContainer>
  );
};

export default StepsContainer;
