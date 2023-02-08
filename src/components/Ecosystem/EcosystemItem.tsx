import { EcosystemItemTypeEnum } from "../../enums";
import StyledEcosystemItem from "./EcosystemItem.styled";

export type EcosystemItemType = {
  pic: React.ReactNode;
  title: string;
  text: string;
  type: EcosystemItemTypeEnum;
};

const EcosystemItem = ({ pic, title, text, type }: EcosystemItemType) => {
  return (
    <StyledEcosystemItem>
      <picture data-type={type}>{pic}</picture>
      <h3>{title}</h3>
      <p>{text}</p>
    </StyledEcosystemItem>
  );
};

export default EcosystemItem;
