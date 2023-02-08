import StyledFooter, {
  FooterContainer,
  FooterCopyright,
} from "./Footer.styled";
import Socials from "../../components/Socials/Socials";
import Contacts from "../../components/Contacts/Contacts";
import { FooterSpiralMobSvg, FooterSpiralSvg } from "../../components/Svg/Svg";
import { useMediaQuery } from "@mui/material";
import { adaptive } from "../../utils";
import { useSectionIsRevealed } from "../../hooks";
import { LandingSectionEnum } from "../../enums";
import Title from "../../components/Title/Title";

const Footer = () => {
  const isDesctop = useMediaQuery(`(min-width: ${adaptive.desktopStart})`);
  const footerIsRevealed = useSectionIsRevealed(LandingSectionEnum.Footer);

  return (
    <StyledFooter>
      <FooterContainer showAnimation={footerIsRevealed}>
        <Title type={LandingSectionEnum.Footer}>Остались вопросы?</Title>
        <Contacts />
        <Socials />
        <FooterCopyright>© ЛАНИТ 1989 – 2022</FooterCopyright>
        {isDesctop ? <FooterSpiralSvg /> : <FooterSpiralMobSvg />}
      </FooterContainer>
    </StyledFooter>
  );
};

export default Footer;
