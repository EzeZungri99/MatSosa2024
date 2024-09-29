import React, { useState } from 'react';
import styled from 'styled-components';

const CarouselContainer = styled.div`
  margin-top: 90px; /* Margen superior igual a la altura del NavBar */
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
  border: 2px solid #ccc;
`;

const Slide = styled.div<{ bgColor: string }>`
  min-width: 100%;
  height: 100%;
  background-color: ${({ bgColor }) => bgColor};
  transition: transform 0.5s ease-in-out;
`;

const Button = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(255, 255, 255, 0.5);
  border: none;
  padding: 10px;
  cursor: pointer;
  &:hover {
    background: rgba(255, 255, 255, 0.8);
  }
`;

const PrevButton = styled(Button)`
  left: 10px;
`;

const NextButton = styled(Button)`
  right: 10px;
`;

const Carousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slides = ['#f8b400', '#f85f73', '#6a0572'];

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? slides.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === slides.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <CarouselContainer>
      {slides.map((color, index) => (
        <Slide key={index} bgColor={color} style={{ transform: `translateX(-${currentIndex * 100}%)` }} />
      ))}
      <PrevButton onClick={handlePrev}>‹</PrevButton>
      <NextButton onClick={handleNext}>›</NextButton>
    </CarouselContainer>
  );
};

export default Carousel;