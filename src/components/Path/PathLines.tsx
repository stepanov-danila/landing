import { useMediaQuery } from "@mui/material";
import { adaptive } from "../../utils";
import { PathMobSvg, PathSvg } from "../Svg/Svg";
import StyledPathLines from "./PathLines.styled";

const PathLines = () => {
  const laptop: boolean = useMediaQuery(`(min-width: ${adaptive.laptop})`);
  return (
    <StyledPathLines isMobile={!laptop}>
      {laptop ? <PathSvg /> : <PathMobSvg />}
    </StyledPathLines>
  );
};

export default PathLines;
