import React from 'react'
import { Link } from 'gatsby';
import styled, { createGlobalStyle } from 'styled-components';
import { colors } from '../utils/colors';

const GlobalStyle = createGlobalStyle`
  body {
    padding: 0;
    margin: 0;
    font-family: 'Montserrat';
    color: white;
  }
  
  *, *::before, *::after {
    box-sizing: border-box;
  }
`;

const StyledWrapper = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${colors.dark};
  position: relative;
`;

const H1 = styled.h1`
  font-size:  ${({isBig}) => isBig ? '5em' : '3em'};
  color:  ${({isBlue}) => isBlue ? 'blue' : 'white'};
`;

const BlueH1 = styled(H1)`
  color: blue;
`

const StyledLink = styled(Link)`
  text-decoration: none;
  color: white;
  font-size: 2em;
  font-weight: 700;
`;

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  width: ${({width}) => width};
  height: 40px;
  background: ${colors.primary};
  border-radius: 50px;
  border: none;
  color: ${colors.white};
  font-size: 1em;
  font-weight: 800;
  transition: box-shadow .3s ease;
  
  :hover {
    box-shadow: 0 10px 20px -15px red;
  }
`;

const IndexPage = () => (
  <>
  <GlobalStyle/>
  <StyledWrapper className="roman">
    <Button width="250px" as={Link} to="/about">About page</Button>
  </StyledWrapper>
  </>
)

export default IndexPage
