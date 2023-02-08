import { useState } from "react";
import ShowcasePic, {
  ShowcasePicProps,
} from "../../components/Showcase/ShowcasePic";
import {
  HeartLineSvg,
  PlaneSvg,
  ShowcaseLine1MobSvg,
  ShowcaseLine1Svg,
  ShowcaseLine2MobSvg,
  ShowcaseLine2Svg,
  ShowcaseLine3Svg,
  ShowcaseLine4MobSvg,
} from "../../components/Svg/Svg";
import { LandingSectionEnum } from "../../enums";
import { adaptive, getSectionELementBySectionId } from "../../utils";
import StyledShowcase, {
  ShowcaseButton,
  ShowcaseContainer,
  ShowcaseIcons,
  ShowcaseLines,
  ShowcasePics,
  ShowcaseText,
  ShowcaseTypography,
} from "./Showcase.styled";
import { useMediaQuery } from "@mui/material";
import { useSectionIsRevealed } from "../../hooks";
import Title from "../../components/Title/Title";

const Showcase = () => {
  const [pics] = useState<ShowcasePicProps[]>([
    {
      src: "https://i.ibb.co/Cvr7MVb/20210629-photo-0321-1.png",
      alt: "",
    },
    {
      src: "https://i.ibb.co/mSVtxqj/20210629-photo-0321-1-1.png",
      alt: "",
    },
    {
      src: "https://i.ibb.co/n8qLsvb/20210629-photo-0073-1.png",
      alt: "",
    },
  ]);

  const maxMobileL: boolean = useMediaQuery(`(max-width: ${adaptive.mobileL})`);
  const minTablet: boolean = useMediaQuery(
    `(min-width: ${adaptive.tabletStart})`
  );
  const minDesktopStart: boolean = useMediaQuery(
    `(min-width: ${adaptive.desktopStart})`
  );

  const showcaseSectionIsRevealed = useSectionIsRevealed(
    LandingSectionEnum.Showcase
  );
  const ecosystemSectionIsRevealed = useSectionIsRevealed(
    LandingSectionEnum.Ecosystem
  );
  const intershipsSectionIsRevealed = useSectionIsRevealed(
    LandingSectionEnum.Internships
  );

  return (
    <StyledShowcase>
      <ShowcaseContainer>
        <ShowcaseTypography>
          <ShowcaseIcons>
            <PlaneSvg />
          </ShowcaseIcons>
          <Title type={LandingSectionEnum.Showcase}>
            Всё изменяется <br /> лучшими студентами и <br /> выпускниками*
            <br />
            <strong>*вами!</strong>
          </Title>
          <ShowcaseText>
            Здесь мы собрали возможности <br /> для каждого, кто начинает
            карьеру
          </ShowcaseText>
          <ShowcaseButton
            onClick={() => {
              window.scrollTo({
                top:
                  getSectionELementBySectionId(LandingSectionEnum.Internships)
                    ?.offsetTop || 0,
                behavior: "smooth",
              });
            }}
          >
            Выбирайте стажировку
          </ShowcaseButton>
        </ShowcaseTypography>
        <ShowcasePics>
          {pics.map((pic, index) => (
            <ShowcasePic key={index} {...pic} />
          ))}
          <ShowcaseLines
            currentSectionIsRevealed={showcaseSectionIsRevealed}
            beneathSectionIsRevealed={
              ecosystemSectionIsRevealed || intershipsSectionIsRevealed
            }
          >
            {maxMobileL ? (
              <>
                <ShowcaseLine1MobSvg />
                <ShowcaseLine2MobSvg />
                <ShowcaseLine4MobSvg />
              </>
            ) : (
              <>
                <ShowcaseLine1Svg />
                <ShowcaseLine2Svg />
              </>
            )}
            {minTablet && (
              <>
                <ShowcaseLine3Svg />
              </>
            )}
            {minDesktopStart && (
              <>
                <ShowcaseLine3Svg />
                <HeartLineSvg />
              </>
            )}
          </ShowcaseLines>
        </ShowcasePics>
      </ShowcaseContainer>
    </StyledShowcase>
  );
};

export default Showcase;
