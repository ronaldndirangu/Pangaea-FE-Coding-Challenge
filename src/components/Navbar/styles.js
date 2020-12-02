import styled from  'styled-components'

const StyledNav = styled.nav`
  height: 4rem;
  display: flex;
  padding: 1rem;
  align-items: center;
  box-sizing: border-box;
  border-bottom: solid 1px #dddddd;
`;

StyledNav.Brand = styled.h1`
  color: #7d7d7d;
  font-family: Lora;
  font-size: 2rem;
  text-transform: uppercase;
`

export default StyledNav;