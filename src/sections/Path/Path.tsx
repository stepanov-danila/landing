import Container from "../../components/Container/Container";
import PathLines from "../../components/Path/PathLines";
import Title from "../../components/Title/Title";
import { LandingSectionEnum } from "../../enums";
import StyledPath from "./Path.styled";

const Path = () => {
  return (
    <StyledPath>
      <Container>
        <Title type={LandingSectionEnum.Path}>
          Пройди свой путь от стажёра <strong>до эксперта</strong>
        </Title>
        <PathLines />
      </Container>
    </StyledPath>
  );
};

export default Path;
