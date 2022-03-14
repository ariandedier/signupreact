import React from 'react'
import styled from 'styled-components'
import logo1 from '../assets/logo1.png'
import Input from './Input'

export const Sidebar = () => {
  return (
      <Container>
          <Logo>
              <img src={logo1} alt="logo"/>
          </Logo>
          <Form>
              <h1>Sign Up</h1>
              <Input placeholder="Full Name" />
              <Input type='email' placeholder="Email" />
              <Input type='password'placeholder="Password" />
              <Input type='password' placeholder="Confirm Password" />
              <button>Sign Up</button>
          </Form>
          <div>

          <h4>Already have an account? <span>Sign In</span></h4>

              <Terms>
                  By Signing Up, I agree to the Privacy Policy <br/>
                  and Terms of Service
              </Terms>
              
          </div>
    </Container>
  )
}


const Terms= styled.p`
    font-size:10px;
    color:#808080;
    text-align:center;
    padding: 0 1rem;
    font-weight:300;
`

const Form = styled.form`
    h1{
        color:#343434;
        font-size:25px;
        margin-bottom:25px
    }
    width:100%;
    display:flex;
    flex-direction:column;
    align-items:center;

    button{
        width: 75%;
        max-width: 350px;
        min-width: 250px;
        height: 40px;
        border: none;
        margin: 1rem 0 ;
        border-radius: 8px;
        background-color: #70edb9;
        color: #fff;
        font-weight:600;
        cursor:pointer;
        box-shadow: 0px 14px 9px -15px rgba(0,0,0,0.25);

    transition: all 0.2s ease-in;
    &:hover{
        transform: translateY(-3px);
    }
    }
`

const Logo = styled.div`
    img{
        height:12rem;
    }
`

const Container = styled.div`
min-width:400px;
backdrop-filter: blur(50px);
background-color: rgba(255,255,255,0.5);
height: 100%;
display:flex;
flex-direction:column;
justify-content: space-evenly;
align-items: center;
padding: 0 2rem;

h4{
    color: #808080;
    font-weight:300;
    margin-bottom:2rem;
}
span{
    color: #ff8d8d;
    cursor:pointer;
    font-weight:600;
}

@media (max-width: 900px) {
    width:100vw;
    position:absolute;
    padding:0;
}
`;


export default Sidebar;