import StyledShowcasePic from "./ShowcasePic.styled";

export type ShowcasePicProps = {
  src: string;
  alt: string;
};

const ShowcasePic = ({ src, alt }: ShowcasePicProps) => {
  return (
    <StyledShowcasePic>
      <img src={src} alt={alt} />
    </StyledShowcasePic>
  );
};

export default ShowcasePic;
