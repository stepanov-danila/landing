import { StoryType } from "../../sections/Stories/Stories";
import { QuoteSvg } from "../Svg/Svg";
import StyledStoriesQuote from "./StoriesQuote.styled";

const StoriesQuote = ({
  picUrl,
  name,
  department,
  text,
}: Omit<StoryType, "videoUrl">) => {
  return (
    <StyledStoriesQuote>
      <QuoteSvg />
      <picture>
        <img src={picUrl} alt={name} />
      </picture>
      <strong>{name}</strong>
      <span>/ {department}</span>
      <p>{text}</p>
    </StyledStoriesQuote>
  );
};

export default StoriesQuote;
