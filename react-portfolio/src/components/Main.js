import React from "react";
import styled from "styled-components";

const MainContainer = styled.div`
  background: ${(props) => props.theme.body};
  width: 100vw;
  height: 100vh;
  overflow-x: hidden;
  position: relative;

  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: "Karla", sans-serif;
  }
`;

const Main = () => {
  return <MainContainer>Main</MainContainer>;
};

export default Main;
