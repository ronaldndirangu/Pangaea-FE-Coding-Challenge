import React from 'react';
import StyledNav from './styles';

const Navbar = ({ title }) => {
  return (
    <StyledNav>
      <StyledNav.Brand>{title}</StyledNav.Brand>
    </StyledNav>
  );
};

export default Navbar;
