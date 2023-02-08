import { useState } from "react";
import Container from "../../components/Container/Container";
import { EcosystemItemType } from "../../components/Ecosystem/EcosystemItem";
import EcosystemList from "../../components/Ecosystem/EcosystemList";
import {
  BookSvg,
  CupSvg,
  DialogSvg,
  GamepadSvg,
  RocketSvg,
  ThumbUpSvg,
} from "../../components/Svg/Svg";
import Title from "../../components/Title/Title";
import { EcosystemItemTypeEnum, LandingSectionEnum } from "../../enums";
import StyledEcosystem from "./Ecosystem.styled";

const Ecosystem = () => {
  const [data] = useState<EcosystemItemType[]>([
    {
      pic: <RocketSvg />,
      title: "Опыт",
      text: "В ЛАНИТ много подразделений, а масштабных проектов еще больше. Неочевидный бонус: мы ценим сотрудников и поддерживаем трансферы внутри группы компании",
      type: EcosystemItemTypeEnum.Experience,
    },
    {
      pic: <DialogSvg />,
      title: "Комьюнити",
      text: "IT-эксперты, спикеры, авторы статей для Habr, участники бегового клуба и спортивных секций, победители внутреннего акселератора — мы развиваемся в сообществе и готовы делиться знаниями",
      type: EcosystemItemTypeEnum.Community,
    },
    {
      pic: <ThumbUpSvg />,
      title: "Онбординг",
      text: "Экскурсия по офису, исчерпывающее погружение в процессы и готовность поддерживать — мы будем рядом, чтобы вы не остались один на один с вопросами в первые рабочие дни",
      type: EcosystemItemTypeEnum.Onboarding,
    },
    {
      pic: <BookSvg />,
      title: "Обучение",
      text: "Корпоративный университет, электронная библиотека, программы повышения квалификации, митапы и лекции от приглашенных гуру индустрии",
      type: EcosystemItemTypeEnum.Education,
    },
    {
      pic: <GamepadSvg />,
      title: "Киберспорт",
      text: "Участие в турнирах между крупнейшими компаниями, своя сборная киберспортсменов, тысячи наигранных часов — да, гейминг у нас в ДНК",
      type: EcosystemItemTypeEnum.Cybersport,
    },
    {
      pic: <CupSvg />,
      title: "Well-being",
      text: "Летний коворкинг на крыше с видом на Останкино, спортзал и фитнес-приложение, салон красоты, пинг-понг и кикер в главном офисе — все, чтобы сохранить продуктивность и work-life balance",
      type: EcosystemItemTypeEnum.WellBeing,
    },
  ]);

  return (
    <StyledEcosystem>
      <Container>
        <Title type={LandingSectionEnum.Ecosystem}>
          Не стажировка, а целая
          <strong>экосистема</strong>
          для вашего развития
        </Title>
        <EcosystemList items={data} />
      </Container>
    </StyledEcosystem>
  );
};

export default Ecosystem;
