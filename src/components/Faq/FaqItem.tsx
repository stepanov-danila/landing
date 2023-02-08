import ButtonBase from "@mui/material/ButtonBase";
import { useState } from "react";
import { ArrowDownSvg, CloseSvg } from "../Svg/Svg";
import StyledFaqItem from "./FaqItem.styled";

export type FaqItemProps = {
  question: string;
  answer: string | React.ReactNode;
};

const FaqItem = ({ question, answer }: FaqItemProps) => {
  const [expanded, setExpanded] = useState<boolean>(false);

  return (
    <StyledFaqItem expanded={expanded}>
      <header>
        <h3>{question}</h3>
        <ButtonBase
          onClick={() => {
            setExpanded((prev) => !prev);
          }}
        >
          {expanded ? <CloseSvg /> : <ArrowDownSvg />}
        </ButtonBase>
      </header>
      <div>{expanded && answer}</div>
    </StyledFaqItem>
  );
};

export default FaqItem;
