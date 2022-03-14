import styled from "styled-components";
import React from 'react';
import frame1 from "../assets/frame1.png";
import Sidebar from "./Sidebar";
import Main from "./Main";

export const App = () => {
  return (
    <Container>
      <Wrapper>

      <Sidebar/>
      <Main/>
      
      </Wrapper>
    </Container>
  )
};

const Container = styled.div`
position: absolute;
top:0;
left: 0;
bottom:0;
right:0;
`;

const Wrapper = styled.div`
background-image: url(${frame1});
background-position: center;
background-size: cover;
background-repeat: no-repeat;
position:static;
width:100%;
height:100%;
display: flex;
`;

export default App;
