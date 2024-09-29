import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  width: 100%;
  height: 100vh;
  box-sizing: border-box;

  @media (max-width: 768px) {
    flex-direction: column;
    height: auto;
  }
`;

const ImageContainer = styled.div`
  width: 50%;
  height: 100%;
  background-color: black;
  margin-right: 20px;

  @media (max-width: 768px) {
    width: 100%;
    height: 200px;
    margin-right: 0;
    margin-bottom: 20px;
  }
`;

const TextContainer = styled.div`
  width: 50%;
  padding: 20px;
  text-align: center;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const About: React.FC = () => {
  return (
    <Container>
      <ImageContainer />
      <TextContainer>
        <h2>About Me</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.
        </p>
      </TextContainer>
    </Container>
  );
};

export default About;