import { useMediaQuery } from "@mui/material";
import { useState } from "react";
import Container from "../../components/Container/Container";
import { InternshipsItemInfoType } from "../../components/Internships/InternshipsCard";
import InternshipsGrid from "../../components/Internships/InternshipsGrid";
import InternshipsText from "../../components/Internships/InternshipsText";
import IntershipsBg from "../../components/Internships/IntershipsBg";
import {
  AstronautSvg,
  ConsultantSvg,
  Rocket2Svg,
} from "../../components/Svg/Svg";
import Title from "../../components/Title/Title";
import { InternshipsGridTypeEnum, LandingSectionEnum } from "../../enums";
import { adaptive } from "../../utils";
import StyledInternships from "./Internships.styled";

const Internships = () => {
  const maxMobileL: boolean = useMediaQuery(`(max-width: ${adaptive.mobileL})`);

  const [cards] = useState<InternshipsItemInfoType[]>([
    // {
    //   title: "Автоматизированное тестирование",
    //   text: "Стажёрская программа ДКС",
    //   pic: <AstronautSvg />,
    //   href: "/",
    // },
    {
      title: "Консультант 1С",
      text: "Стажёрская программа «Консист Бизнес Групп»",
      pic: <ConsultantSvg />,
      href: "https://job.lanit.ru/intern/Pages/cbg-consultant.aspx",
    },
    {
      title: "Консультант-аналитик",
      text: "Стажёрская программа «Консист Бизнес Групп»",
      pic: <ConsultantSvg />,
      href: "https://job.lanit.ru/intern/Pages/cbg-consultant_a.aspx",
    },
    // {
    //   title: "Разработка Java",
    //   text: "Стажёрская программа «Консист Бизнес Групп»",
    //   pic: <ConsultantSvg />,
    //   href: "/",
    // },
    {
      title: "Разработка Java",
      text: "Стажёрская программа «Консист Бизнес Групп»",
      pic: <AstronautSvg />,
      href: "https://job.lanit.ru/intern/Pages/cbg-java.aspx",
    },
    {
      title: "Разработка Java",
      text: "Стажёрская программа «ЛАНИТ — Би Пи Эм»",
      pic: <Rocket2Svg />,
      href: "https://job.lanit.ru/intern/Pages/bpm_java.aspx ",
    },
    // {
    //   title: "Функциональное тестирование",
    //   text: "Стажёрская программа ДКС",
    //   pic: <Rocket2Svg />,
    //   href: "/",
    // },
  ]);

  return (
    <StyledInternships>
      <Container>
        {maxMobileL && <IntershipsBg />}
        <Title type={LandingSectionEnum.Internships}>
          Выбирайте <strong>направление</strong>
        </Title>
        <InternshipsGrid cards={cards} type={InternshipsGridTypeEnum.Small} />
        <InternshipsText>
          Не нашли ту самую стажировку?
          <br />
          <a href="https://job.lanit.ru/vacancy/Pages/new-search.aspx#isyoung=1 ">
            Посмотрите открытые вакансии
          </a>
        </InternshipsText>
      </Container>
    </StyledInternships>
  );
};

export default Internships;
