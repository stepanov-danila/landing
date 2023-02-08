import { keyframes } from "styled-components";

export const strokeAnimation = keyframes`
  to {
    stroke-dashoffset: 0
  }
`;
export const strokeMobShowcaseLine1Animation = keyframes`
  to {
    stroke-dashoffset: -72
  }
`;

export const fadeAnimation = keyframes`
  to {
    opacity: 1;
  }
`;

export const planeAnimation = keyframes`
  99% {
    stroke-dashoffset: 88;
    fill: none
  }
  100% {
    stroke-dashoffset: 0;
    fill: rgb(243, 146, 36)
  }
`;
