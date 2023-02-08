import { useState } from "react";
import ReactPlayer from "react-player/youtube";
import { StoryType } from "../../sections/Stories/Stories";
import {
  PlaySvg,
  StoriesVideoCardBgSvg,
  StoriesVideoCardLineActiveCurrentSvg,
  StoriesVideoCardLineActiveNotCurrentSvg,
} from "../Svg/Svg";
import StyledStoriesVideo, {
  StoriesVideoCard,
  StoriesVideoPic,
  StoriesVideoPlayBtn,
  StoriesVideoPlayer,
  StoriesVideoText,
} from "./StoriesVideo.styled";

const StoriesVideo = ({
  picUrl,
  videoUrl,
  name,
  department,
  text,
}: StoryType) => {
  const [showPlayer, setShowPlayer] = useState<boolean>(false);

  return (
    <StyledStoriesVideo>
      {showPlayer ? (
        <StoriesVideoPlayer>
          <ReactPlayer
            playing={true}
            url={videoUrl}
            width="100%"
            height={380}
            controls
            stopOnUnmount
          />
        </StoriesVideoPlayer>
      ) : (
        <StoriesVideoCard>
          <StoriesVideoText>
            <StoriesVideoCardBgSvg />
            <StoriesVideoCardLineActiveCurrentSvg />
            <StoriesVideoCardLineActiveNotCurrentSvg />
            <h3>{name}</h3>
            <h4>{department}</h4>
            <p>{text}</p>
          </StoriesVideoText>
          <StoriesVideoPic>
            <img src={picUrl} alt={name} />
          </StoriesVideoPic>
          <StoriesVideoPlayBtn onClick={() => setShowPlayer(true)}>
            <PlaySvg />
          </StoriesVideoPlayBtn>
        </StoriesVideoCard>
      )}
    </StyledStoriesVideo>
  );
};

export default StoriesVideo;
