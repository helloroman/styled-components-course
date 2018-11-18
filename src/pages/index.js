import React from 'react'
import styled from 'styled-components';

const StyledWrapper = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: pink;
  position: relative;
  
  ::before {
    position: absolute;
    top: 0;
    left: 0;
    content: '';
    width: 50px;
    height: 50px;
    display: block;
    background: blue;
  } 
`;

const IndexPage = () => (
  <StyledWrapper>
    <h1>Hi people</h1>
  </StyledWrapper>
)

export default IndexPage
