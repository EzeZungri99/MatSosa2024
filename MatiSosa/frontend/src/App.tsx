import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import styled, { ThemeProvider, createGlobalStyle } from 'styled-components';
import { lightTheme, darkTheme } from './themes';
import Home from './Components/Home';
import About from './Components/About';
import Carousel from './Components/Carousel';
import Gallery from './Components/Gallery';
import ContactForm from './Components/ContactForm';
import NavBar from './Components/NavBar';
import Quote from './Components/Quote';
import Footer from './Components/Footer';

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    transition: all 0.25s linear;
  }
`;

const AppContainer = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const Content = styled.div`
  flex: 1;
`;

const App: React.FC = () => {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <GlobalStyle />
      <AppContainer>
        <Router>
          <NavBar themeMode={theme} toggleTheme={toggleTheme} />
          <Content>
            <Routes>
              <Route path="/" element={<>
                <Carousel />
                <Gallery />
                <Quote />
                <About />
                <ContactForm />
              </>} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<ContactForm />} />
            </Routes>
          </Content>
          <Footer />
        </Router>
      </AppContainer>
    </ThemeProvider>
  );
};

export default App;