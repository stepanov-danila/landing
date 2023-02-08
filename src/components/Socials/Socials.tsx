import { useState } from "react";
import { DzenSvg, TelegramSvg, VkSvg } from "../Svg/Svg";
import StyledSocials, { SocialsItem, SocialsText } from "./Socials.styled";

export type SocialType = {
  icon: JSX.Element;
  link: string;
};

const Socials = () => {
  const [data] = useState<SocialType[]>([
    {
      icon: <TelegramSvg />,
      link: "https://t.me/Lanit_life",
    },
    {
      icon: <VkSvg />,
      link: "https://vk.com/lanit_life",
    },
    {
      icon: <DzenSvg />,
      link: "https://dzen.ru/lanit",
    },
  ]);

  const openLink = (link: string) => {
    window.open(link);
  };

  return (
    <StyledSocials>
      <SocialsText>Еще больше о нас в соцсетях:</SocialsText>
      <ul>
        {data.map(({ icon, link }, index) => (
          <li key={index} title={link}>
            <SocialsItem onClick={() => openLink(link)}>{icon}</SocialsItem>
          </li>
        ))}
      </ul>
    </StyledSocials>
  );
};

export default Socials;
