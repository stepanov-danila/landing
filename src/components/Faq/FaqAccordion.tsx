import StyledFaqAccordion from "./FaqAccordion.styled";
import FaqItem, { FaqItemProps } from "./FaqItem";

type FaqAccordionProps = {
  data: FaqItemProps[];
};

const FaqAccordion = ({ data }: FaqAccordionProps) => {
  return (
    <StyledFaqAccordion>
      {data.map(({ question, answer }, index) => (
        <FaqItem key={index} question={question} answer={answer} />
      ))}
    </StyledFaqAccordion>
  );
};

export default FaqAccordion;
