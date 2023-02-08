import { useEffect, useState, useRef } from "react";
import { useIntersectionObserver } from "react-intersection-observer-hook";
import { useSelector } from "react-redux";
import { LandingSectionEnum } from "./enums";
import { RootState } from "./redux/store";

export const useIsVissible = () => {
  const [visibble, setvisibble] = useState<boolean>(false);
  const [ref, { entry }] = useIntersectionObserver();

  useEffect(() => {
    setvisibble(!!entry && entry.isIntersecting);
  }, [entry]);

  return { visibble, ref };
};

export const useSectionIsRevealed = (sectionType: LandingSectionEnum) => {
  const revealedSections = useSelector(
    (state: RootState) => state.landing.revealedSections
  );

  return revealedSections.includes(sectionType);
};
