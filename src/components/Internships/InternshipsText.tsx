import StyledInternshipsText from "./InternshipsText.styled";

type InternshipsTextProps = {
  children: string | React.ReactNode;
};

const InternshipsText = ({ children }: InternshipsTextProps) => {
  return (
    <StyledInternshipsText className="internships-text">
      {children}
    </StyledInternshipsText>
  );
};

export default InternshipsText;
