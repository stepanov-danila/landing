import StyledIntershipsBg from "./IntershipsBg.styled";
import { HeartLineMobSvg } from "../Svg/Svg";
import url from "../../assets/img/heart-line.png";

const IntershipsBg = () => {
  return (
    <StyledIntershipsBg>
      {/* <HeartLineMobSvg /> */}
      <img src={url} alt="" />
    </StyledIntershipsBg>
  );
};

export default IntershipsBg;
