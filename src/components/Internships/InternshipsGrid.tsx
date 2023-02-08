import { InternshipsGridTypeEnum } from "../../enums";
import { getInternshipsCardTypeFromGridTypeAndIndex } from "../../utils";
import InternshipsCard, { InternshipsItemInfoType } from "./InternshipsCard";
import StyledInternshipsGrid from "./InternshipsGrid.styled";

type InternshipsGridProps = {
  cards: InternshipsItemInfoType[];
  type?: InternshipsGridTypeEnum;
};

const InternshipsGrid = ({
  cards,
  type = InternshipsGridTypeEnum.Middle,
}: InternshipsGridProps) => {
  return (
    <StyledInternshipsGrid>
      {cards.map((card, index) => (
        <InternshipsCard
          key={index}
          {...card}
          gridType={type}
          cardType={getInternshipsCardTypeFromGridTypeAndIndex(type, index)}
        />
      ))}
    </StyledInternshipsGrid>
  );
};

export default InternshipsGrid;
