import EcosystemItem, { EcosystemItemType } from "./EcosystemItem";
import StyledEcosystemList from "./EcosystemList.styled";

type EcosystemListProps = {
  items: EcosystemItemType[];
};

const EcosystemList = ({ items }: EcosystemListProps) => {
  return (
    <StyledEcosystemList>
      {items.map((item, index) => (
        <EcosystemItem key={index} {...item} />
      ))}
    </StyledEcosystemList>
  );
};

export default EcosystemList;
