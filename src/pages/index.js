import React from 'react'
import styled, { createGlobalStyle } from 'styled-components';

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
  background: pink;
  position: relative;
`;

const H1 = styled.h1`
  font-size:  ${({isBig}) => isBig ? '5em' : '3em'};
  color:  ${({isBlue}) => isBlue ? 'blue' : 'white'};
`;

const IndexPage = () => (
  <>
  <GlobalStyle/>
  <StyledWrapper className="roman">
    <H1 isBig>Hi people</H1>
    <H1 isBlue>Hi people</H1>
  </StyledWrapper>
  </>
)

export default IndexPage
