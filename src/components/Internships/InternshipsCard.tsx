import { InternshipsCardTypeEnum, InternshipsGridTypeEnum } from "../../enums";
import { IntershipArrowBtnIconSvg } from "../Svg/Svg";
import StyledInternshipsCard from "./InternshipsCard.styled";

export type InternshipsItemInfoType = {
  title: string;
  text: string;
  pic: React.ReactNode;
  href: string;
};

export type InternshipsCardProps = InternshipsItemInfoType & {
  cardType: InternshipsCardTypeEnum;
  gridType: InternshipsGridTypeEnum;
};

const InternshipsCard = ({
  title,
  text,
  pic,
  href,
  cardType = InternshipsCardTypeEnum.Small,
  gridType = InternshipsGridTypeEnum.Middle,
}: InternshipsCardProps) => {
  return (
    <StyledInternshipsCard
      onClick={() => {
        window.open(href);
      }}
      cardType={cardType}
      gridType={gridType}
      className="internship-card"
      title={href}
    >
      <h3>{title}</h3>
      <p>{text}</p>
      <i>
        <IntershipArrowBtnIconSvg />
      </i>
      <picture>{pic}</picture>
    </StyledInternshipsCard>
  );
};

export default InternshipsCard;
