import React from 'react'
import styled from 'styled-components'


const Main = () => {
  return (
      <Container>
    <h1>Join the Team</h1>
    </Container>
  )
}



const Container = styled.div`
    width:100%;
    height:100%;
    display:flex;
    justify-content:center;
    align-items:center;

    h1 {
        font-size:55px;
        font-weight:300;
        color:#343434;
    }

    @media (max-width: 900px){
        display:none;
    }
`;

export default Main