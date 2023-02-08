import { LandingSectionEnum } from "../../enums";
import { useSectionIsRevealed } from "../../hooks";
import {
  StoriesLinegSvg,
  StoriesMountainSvg,
  StoriesSpiralSvg,
} from "../Svg/Svg";
import StyledStoriesBg from "./StoriesBg.styled";

const StoriesBg = () => {
  const sectionIsRevealed = useSectionIsRevealed(LandingSectionEnum.Stories);

  return (
    <StyledStoriesBg showAnimation={sectionIsRevealed}>
      <picture>
        <StoriesSpiralSvg />
        <StoriesLinegSvg />
        <StoriesMountainSvg />
      </picture>
    </StyledStoriesBg>
  );
};

export default StoriesBg;
