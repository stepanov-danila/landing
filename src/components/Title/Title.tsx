import React from "react";
import { LandingSectionEnum } from "../../enums";
import StyledTitle from "./Title.styled";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useIsVissible } from "../../hooks";
import { changeActiveSection, changeRevealedSections } from "../../redux/slice";
import { AppDispatch, RootState } from "../../redux/store";

export type TitleProps = {
  type: LandingSectionEnum;
  children: string | React.ReactNode;
  style?: React.CSSProperties;
};

const Title = ({ children, style, type }: TitleProps) => {
  const dispatch: AppDispatch = useDispatch();
  const { visibble, ref } = useIsVissible();
  const revealedSections = useSelector(
    (state: RootState) => state.landing.revealedSections
  );

  useEffect(() => {
    if (!revealedSections.includes(type) && visibble) {
      dispatch(changeRevealedSections([...revealedSections, type]));
    }
  }, [revealedSections, type, visibble, dispatch]);

  useEffect(() => {
    if (visibble) {
      dispatch(changeActiveSection(type));
    }
  }, [visibble, dispatch, type]);

  return (
    <StyledTitle ref={ref} data-testid="title" style={style} type={type}>
      {children}
    </StyledTitle>
  );
};

export default Title;
