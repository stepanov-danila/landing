import StyledStepsList from "./StepsList.styled";
import StepsItem, { StepsItemProps } from "./StepsItem";

type StepsListProps = {
  steps: StepsItemProps[];
};

const StepsList = ({ steps }: StepsListProps) => {
  return (
    <StyledStepsList>
      {steps.map((step) => (
        <StepsItem key={step.index} {...step} />
      ))}
    </StyledStepsList>
  );
};

export default StepsList;
