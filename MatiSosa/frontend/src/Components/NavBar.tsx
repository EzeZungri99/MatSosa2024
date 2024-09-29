import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const NavBarContainer = styled.nav<{ isScrolled: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 20px;
  background-color: ${({ theme, isScrolled }) => isScrolled ? theme.navBackground : theme.body};
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 1000;
  box-shadow: ${({ isScrolled }) => isScrolled ? '0 2px 4px rgba(0, 0, 0, 0.1)' : 'none'};
  transition: background-color 0.3s ease, box-shadow 0.3s ease;
  height: 70px; /* Altura fija para el NavBar */
`;

const NavLogo = styled.div<{ themeMode: string }>`
  width: 50px;
  height: 50px;
  background-color: ${({ themeMode }) => (themeMode === 'light' ? 'black' : 'white')};
  border-radius: 50%;
  margin: 0 20px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ themeMode }) => (themeMode === 'light' ? 'white' : 'black')};
  font-weight: bold;
  font-size: 1.2em;
`;

const NavLinks = styled.div`
  display: flex;
  gap: 20px;
`;

const NavLink = styled(Link)`
  text-decoration: none;
  color: ${({ theme }) => theme.text};
  font-weight: bold;
  position: relative;
  transition: color 0.3s ease;

  &:hover {
    color: #6a0572;
  }

  &::after {
    content: '';
    position: absolute;
    width: 100%;
    transform: scaleX(0);
    height: 2px;
    bottom: -3px;
    left: 0;
    background-color: #6a0572;
    transform-origin: bottom right;
    transition: transform 0.25s ease-out;
  }

  &:hover::after {
    transform: scaleX(1);
    transform-origin: bottom left;
  }
`;

const NavBar: React.FC<{ themeMode: string; toggleTheme: () => void }> = ({ themeMode, toggleTheme }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = () => {
    setIsScrolled(window.scrollY > 0);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <NavBarContainer isScrolled={isScrolled}>
      <NavLinks>
        <NavLink to="/">HOME</NavLink>
        <NavLink to="/trabajos">TRABAJOS</NavLink>
      </NavLinks>
      <NavLogo themeMode={themeMode} onClick={toggleTheme}>
        {themeMode === 'light' ? '🌞' : '🌜'}
      </NavLogo>
      <NavLinks>
        <NavLink to="/about">ABOUT ME</NavLink>
        <NavLink to="/contact">CONTACT</NavLink>
      </NavLinks>
    </NavBarContainer>
  );
};

export default NavBar;