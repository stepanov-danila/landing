import styled from "styled-components";

export default styled.picture`
  display: flex;
  border-radius: 20px;
  overflow: hidden;
  background: ${(props) => props.theme.main.colors.blueGradient};
  position: relative;
  z-index: 2;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
