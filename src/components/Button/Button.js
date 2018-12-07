import styled from 'styled-components'

const Button = styled.button`
  width: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  height: 40px;
  border-radius: 50px;
  border: 2px solid ${({theme}) => theme.colors.primary};
  color: ${({theme}) => theme.colors.primary};
  font-size: 1em;
  font-weight: 800;
  transition: box-shadow .3s ease;
  
  :hover {
    box-shadow: 0 10px 20px -15px red;
  }
`;

export default Button;