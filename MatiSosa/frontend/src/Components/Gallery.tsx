import React, { useState } from 'react';
import styled from 'styled-components';

const GalleryContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 1fr); /* Ajusta las filas para que se adapten al tamaño del contenedor */
  gap: 10px;
  padding: 20px;
  position: relative;
  z-index: 1;
  height: 70vh; /* Ocupa el 70% de la altura de la pantalla */
`;

const GalleryItem = styled.div<{ bgColor: string; isHovered: boolean; isExpanded: boolean }>`
  background-color: ${({ bgColor }) => bgColor};
  position: relative;
  overflow: hidden;
  cursor: pointer;
  transition: transform 0.6s ease-in-out, width 0.6s ease-in-out, height 0.6s ease-in-out, filter 0.3s ease-in-out;
  filter: brightness(0.8);
  ${({ isHovered }) => isHovered && `
    z-index: 2;
    filter: brightness(1.2);
  `}
  ${({ isExpanded }) => isExpanded && `
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 3;
  `}
`;

const Description = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.7);
  color: white;
  padding: 10px;
  opacity: 0;
  transition: opacity 0.3s ease-in-out;
  ${GalleryItem}:hover & {
    opacity: 1;
  }
`;

const Gallery: React.FC = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const items = ['#f8b400', '#f85f73', '#6a0572', '#00b4d8', '#90e0ef', '#caf0f8'];

  return (
    <GalleryContainer>
      {items.map((color, index) => (
        <GalleryItem
          key={index}
          bgColor={color}
          isHovered={hoveredIndex === index}
          isExpanded={expandedIndex === index}
          onMouseEnter={() => setHoveredIndex(index)}
          onMouseLeave={() => setHoveredIndex(null)}
          onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
        >
          <Description>Project {index + 1} Description</Description>
        </GalleryItem>
      ))}
    </GalleryContainer>
  );
};

export default Gallery;