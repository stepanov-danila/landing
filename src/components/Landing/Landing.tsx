import { useEffect, useState } from "react";
import { LandingSectionEnum } from "../../enums";
import Ecosystem from "../../sections/Ecosystem/Ecosystem";
import Faq from "../../sections/Faq/Faq";
import Internships from "../../sections/Internships/Internships";
import Path from "../../sections/Path/Path";
import Steps from "../../sections/Steps/Steps";
import Stories from "../../sections/Stories/Stories";
import {
  adaptive,
  getSectionELementBySectionId,
  getSectionId,
} from "../../utils";
import Footer from "../../sections/Footer/Footer";
import Header from "../Header/Header";
import Logo from "../Logo/Logo";
import Menu from "../Menu/Menu";
import Navigation from "../Navigation/Navigation";
import Section from "../Section/Section";
import Showcase from "../../sections/Showcase/Showcase";
import StyledLanding from "./Landing.styled";
import { useMediaQuery } from "@mui/material";

const Landing = () => {
  const [sections] = useState<
    {
      index: LandingSectionEnum;
      children: React.ReactNode;
    }[]
  >([
    {
      index: LandingSectionEnum.Showcase,
      children: <Showcase />,
    },
    {
      index: LandingSectionEnum.Ecosystem,
      children: <Ecosystem />,
    },
    {
      index: LandingSectionEnum.Internships,
      children: <Internships />,
    },
    {
      index: LandingSectionEnum.Path,
      children: <Path />,
    },
    {
      index: LandingSectionEnum.Stories,
      children: <Stories />,
    },
    {
      index: LandingSectionEnum.Steps,
      children: <Steps />,
    },
    {
      index: LandingSectionEnum.Faq,
      children: <Faq />,
    },
    {
      index: LandingSectionEnum.Footer,
      children: <Footer />,
    },
  ]);

  const isDesctop = useMediaQuery(`(min-width: ${adaptive.desktopStart})`);

  const setScrollTop = () => {
    localStorage.setItem("winScrollTop", `${window.scrollY}`);
  };

  useEffect(() => {
    const scrollTop = localStorage.getItem("winScrollTop");

    if (scrollTop) {
      window.scrollTo(0, Math.round(parseInt(scrollTop)));
    }

    window.addEventListener("scroll", setScrollTop);

    return () => {
      window.removeEventListener("scroll", setScrollTop);
    };
  }, []);

  return (
    <StyledLanding>
      <Header
        LogoComponent={<Logo />}
        NavComponent={
          <Menu
            items={[
              {
                title: "Блог",
                href: "https://job.lanit.ru/blog/Pages/main.aspx ",
              },
              {
                title: "О нас",
                href: "https://job.lanit.ru/Pages/default.aspx#about",
              },
              {
                title: "Вакансии",
                href: "https://job.lanit.ru/vacancy/Pages/new-search.aspx",
              },
              {
                title: "Старт карьеры",
                href: `#section-${LandingSectionEnum.Internships}`,
                onClick: () => {
                  window.scrollTo({
                    top:
                      getSectionELementBySectionId(
                        LandingSectionEnum.Internships
                      )?.offsetTop || 0,
                    behavior: "smooth",
                  });
                },
              },
            ]}
          />
        }
      />
      {isDesctop && (
        <Navigation sections={sections.map((section) => section.index)} />
      )}
      {sections.map(({ index, children }) => (
        <Section key={index} id={getSectionId(index)}>
          {children}
        </Section>
      ))}
    </StyledLanding>
  );
};

export default Landing;
