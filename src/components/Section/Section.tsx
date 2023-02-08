import StyledSection from "./Section.styled";

export type SectionProps = {
  children: React.ReactNode;
  id: string;
};

const Section = ({ children, id }: SectionProps) => {
  return <StyledSection id={id}>{children}</StyledSection>;
};

export default Section;
