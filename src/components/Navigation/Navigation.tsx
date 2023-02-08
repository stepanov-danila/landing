import { useSelector } from "react-redux";
import { LandingSectionEnum } from "../../enums";
import StyledNavigation from "./Navigation.styled";
import { RootState } from "../../redux/store";
import { getSectionELementBySectionId, getSectionId } from "../../utils";

export type NavigationProps = {
  sections: LandingSectionEnum[];
};

const Navigation = ({ sections }: NavigationProps) => {
  const activeSection = useSelector(
    (state: RootState) => state.landing.activeSection
  );

  const handleClick = (section: LandingSectionEnum) => {
    // dispatch(changeActiveSection(section));
    window.scrollTo({
      top: getSectionELementBySectionId(section)?.offsetTop || 0,
      behavior: "smooth",
    });
  };

  return (
    <StyledNavigation activeSection={activeSection}>
      {sections.map((section) => (
        <a
          href={getSectionId(section)}
          key={section}
          data-active={activeSection === section}
          onClick={(e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
            e.preventDefault();
            handleClick(section);
          }}
        >
          {" "}
        </a>
      ))}
    </StyledNavigation>
  );
};

export default Navigation;
