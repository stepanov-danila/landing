import { StepsItemIndexEnum } from "../../enums";
import StyledStepsItem from "./StepItem.styled";

export type StepsItemProps = {
  index: StepsItemIndexEnum;
  name: string;
  period?: string;
  pic: React.ReactNode;
};

const StepsItem = ({ index, name, period, pic }: StepsItemProps) => {
  return (
    <StyledStepsItem index={index}>
      <header>
        <strong>
          <span>{index}</span>
        </strong>
        <hgroup>
          <h3>{name}</h3>
          {period && <h5>{period}</h5>}
        </hgroup>
      </header>
      <picture>{pic}</picture>
    </StyledStepsItem>
  );
};

export default StepsItem;
