import StyledContainer from "./Container.styled";

type ContainerProps = {
  children?: React.ReactNode;
};

const Container = ({ children }: ContainerProps) => {
  return <StyledContainer data-testid="container">{children}</StyledContainer>;
};

export default Container;
