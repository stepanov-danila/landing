import Container from "../../components/Container/Container";
import StepsContainer from "../../components/Steps/StepsContainer";
import Title from "../../components/Title/Title";
import { LandingSectionEnum, StepsItemIndexEnum } from "../../enums";
import StyledSteps from "./Steps.styled";
import { useState } from "react";
import { StepsItemProps } from "../../components/Steps/StepsItem";
import { useMediaQuery } from "@mui/material";
import { adaptive } from "../../utils";
import StepsList from "../../components/Steps/StepsList";
import {
  Step1Svg,
  Step2Svg,
  Step3Svg,
  Step4Svg,
  Step5Svg,
  Step6Svg,
} from "../../components/Svg/Svg";

const Steps = () => {
  const [stepsData] = useState<StepsItemProps[]>([
    {
      index: StepsItemIndexEnum.Resume,
      name: "Вы присылаете резюме",
      pic: <Step1Svg />,
    },
    {
      index: StepsItemIndexEnum.Search,
      name: "Отбор кандидатов",
      period: "1-2 дня",
      pic: <Step2Svg />,
    },
    {
      index: StepsItemIndexEnum.Interview,
      name: "Интервью с тестовым заданием",
      pic: <Step3Svg />,
    },
    {
      index: StepsItemIndexEnum.Internship,
      name: "Стажировка",
      period: "от 2 недель до 3 месяцев",
      pic: <Step4Svg />,
    },
    {
      index: StepsItemIndexEnum.Exam,
      name: "Экзамен",
      pic: <Step5Svg />,
    },
    {
      index: StepsItemIndexEnum.Wellcome,
      name: "Добро пожаловать в команду!",
      pic: <Step6Svg />,
    },
  ]);

  const minDesctop = useMediaQuery(`(min-width: ${adaptive.desktopStart})`);

  return (
    <StyledSteps>
      <Container>
        <Title type={LandingSectionEnum.Steps}>
          Как устроена <strong>стажировка</strong>
        </Title>
      </Container>
      {minDesctop ? <StepsContainer /> : <StepsList steps={stepsData} />}
    </StyledSteps>
  );
};

export default Steps;
