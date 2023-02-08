import Slider from "react-slick";
import { StoryType } from "../../sections/Stories/Stories";
import { ArrowLeftSvg, ArrowRightSvg } from "../Svg/Svg";
import StoriesQuote from "./StoriesQuote";
import StyledStoriesSlider, { StyledSliderarrow } from "./StoriesSlider.styled";
import StoriesVideo from "./StoriesVideo";
// import "../../assets/vendor/slick-carousel/slick.css";

const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 2,
  slidesToScroll: 1,

  prevArrow: (
    <StyledSliderarrow>
      <ArrowLeftSvg />
    </StyledSliderarrow>
  ),
  nextArrow: (
    <StyledSliderarrow>
      <ArrowRightSvg />
    </StyledSliderarrow>
  ),
  responsive: [
    {
      breakpoint: 1440,
      settings: {
        arrows: false,
        slidesToShow: 1,
      },
    },
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        arrows: false,
      },
    },
  ],
};

type StoriesSliderProps = {
  slides: StoryType[];
};

const StoriesSlider = ({ slides }: StoriesSliderProps) => {
  return (
    <StyledStoriesSlider>
      <Slider {...settings}>
        {slides.map((story, index) =>
          story.videoUrl ? (
            <StoriesVideo key={index} {...story} />
          ) : (
            <StoriesQuote key={index} {...story} />
          )
        )}
      </Slider>
    </StyledStoriesSlider>
  );
};

export default StoriesSlider;
