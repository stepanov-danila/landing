import {
  InternshipsCardTypeEnum,
  InternshipsGridTypeEnum,
  LandingSectionEnum,
} from "./enums";

export const getSectionId = (target: LandingSectionEnum): string =>
  `section-${target}`;

export const getSectionELementBySectionId = (target: LandingSectionEnum) =>
  document.getElementById(getSectionId(target));

export const adaptive = {
  mobileS: "320px",
  mobileM: "375px",
  mobileL: "580px",
  mobileEnd: "767px",
  tabletStart: "768px",
  tabletEnd: "1024px",
  laptop: "1025px",
  laptopM: "1280px",
  laptopL: "1440px",
  desktopStart: "1441px",
  desktop: "1920px",
};

export const getInternshipsCardTypeFromGridTypeAndIndex = (
  gridType: InternshipsGridTypeEnum,
  index: number
): InternshipsCardTypeEnum => {
  if (gridType === InternshipsGridTypeEnum.Small) {
    if (index === 0) {
      return InternshipsCardTypeEnum.Middle;
    }
    if (index === 1) {
      return InternshipsCardTypeEnum.Big;
    }
    if (index === 2) {
      return InternshipsCardTypeEnum.Big;
    }
    if (index === 3) {
      return InternshipsCardTypeEnum.Middle;
    }
    if (index === 4) {
      return InternshipsCardTypeEnum.Middle;
    }
    if (index === 5) {
      return InternshipsCardTypeEnum.Big;
    }
  }
  if (gridType === InternshipsGridTypeEnum.Middle) {
    if (index === 0) {
      return InternshipsCardTypeEnum.Middle;
    }
    if (index === 1) {
      return InternshipsCardTypeEnum.Big;
    }
    if (index === 2) {
      return InternshipsCardTypeEnum.Small;
    }
    if (index === 3) {
      return InternshipsCardTypeEnum.Small;
    }
    if (index === 4) {
      return InternshipsCardTypeEnum.Middle;
    }
    if (index === 5) {
      return InternshipsCardTypeEnum.Big;
    }
  }
  if (gridType === InternshipsGridTypeEnum.Big) {
    if (index === 0) {
      return InternshipsCardTypeEnum.Middle;
    }
    if (index === 1) {
      return InternshipsCardTypeEnum.Small;
    }
    if (index === 2) {
      return InternshipsCardTypeEnum.Small;
    }
    if (index === 3) {
      return InternshipsCardTypeEnum.Small;
    }
    if (index === 4) {
      return InternshipsCardTypeEnum.Small;
    }
    if (index === 5) {
      return InternshipsCardTypeEnum.Middle;
    }
  }
  return InternshipsCardTypeEnum.Small;
};
