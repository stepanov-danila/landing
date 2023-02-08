import Title from "../../components/Title/Title";
import StyledStories from "./Stories.styled";
import { LandingSectionEnum } from "../../enums";
import StoriesBg from "../../components/Stories/StoriesBg";
import Container from "../../components/Container/Container";
import { useState } from "react";
import StoriesSlider from "../../components/Stories/StoriesSlider";

export type StoryType = {
  picUrl: string;
  videoUrl?: string;
  name: string;
  department: string;
  text: string;
};

const Stories = () => {
  const [storiesSlides] = useState<StoryType[]>([
    // {
    //   picUrl: "https://i.ibb.co/0XXztKx/image.png",
    //   videoUrl: "https://www.youtube.com/watch?v=ysz5S6PUM-U",
    //   name: "Иванова Анна Михайловна",
    //   department: "Главный бухгалтер ГК Ланит",
    //   text: "Рассказывает свой путь от стажера до главного бухгалтера за 7 лет работы в компаниии",
    // },
    // {
    //   picUrl: "https://i.ibb.co/1zqqFVf/1.png",
    //   videoUrl: "https://www.youtube.com/watch?v=ysz5S6PUM-U",
    //   name: "Иванова Анна Михайловна",
    //   department: "Главный бухгалтер ГК Ланит",
    //   text: "Рассказывает свой путь от стажера до главного бухгалтера за 7 лет работы в компаниии",
    // },
    {
      picUrl: "https://i.ibb.co/Zh1W2p9/1.jpg",
      name: "Рим",
      department: "Школа разработки",
      text: "Каждому студенту-программисту, у которого еще нет опыта, я бы хотел сказать: Школа разработки — отличный шанс испытать себя и найти свои зоны роста.",
    },
    {
      picUrl: "https://i.ibb.co/rMwdXML/2.jpg",
      name: "Элина",
      department: "Школа аналитики",
      text: "Для меня атмосфера в команде — то, что действительно имеет значение, когда речь заходит о работе мечты. Перед тем, как попасть в ЛАНИТ, я изучала компанию: смотрела сайт, канал на YouTube, рейтинги, отзывы от сотрудников и социальные сети. Все говорило о том, что в ЛАНИТ развита корпоративная культура, — и это оказалось правдой.",
    },
    // {
    //   picUrl: "https://i.ibb.co/S5WTjGr/3.jpg",
    //   name: "Элина",
    //   department: "Школа аналитики",
    //   text: "Широкий спектр задач, дружелюбная атмосфера в команде, ответственное отношение сотрудников к работе — это то, что приятно удивило меня, когда я попала на стажировку. Здесь вы за короткий срок попробуете разные форматы и сформируете свое отношение к аналитике.",
    // },
    // {
    //   picUrl: "https://i.ibb.co/S5WTjGr/3.jpg",
    //   name: "Элина",
    //   department: "Школа аналитики",
    //   text: "Крутой микс разных задач: и написание требований, и общение с людьми, и построение моделей, и работа с данными, — в ЛАНИТ ты не плаваешь в рутине.",
    // },
    {
      picUrl: "https://i.ibb.co/S5WTjGr/3.jpg",
      name: "Елизавета",
      department: "Школа аналитики",
      text: "Мне понравилось, что у стажёров была возможность посещать офис и полностью погружаться в рабочую атмосферу, знакомиться с компанией и сотрудниками. Здорово, что нас приглашали на митапы. А еще программа организована так, что не приходится скучать и решать посредственные задачи. ",
    },
    {
      picUrl: "https://i.ibb.co/zSjXxYN/4.jpg",
      name: "Илья",
      department: "Школа Pega-разработки",
      text: "Мне понравилось, что мне четко рассказали о том, что меня ждет. Другие вакансии не содержали такого понятного плана действий.",
    },
  ]);

  return (
    <StyledStories>
      <Container>
        <Title type={LandingSectionEnum.Stories}>
          От студента до топ-менеджера <br /> в ЛАНИТ — это не метафора
        </Title>
        <StoriesSlider slides={storiesSlides} />
        <StoriesBg />
      </Container>
    </StyledStories>
  );
};

export default Stories;
