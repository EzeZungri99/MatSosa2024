import React from 'react';
import styled from 'styled-components';

const QuoteContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  width: 100%;
  height: 30vh;
  box-sizing: border-box;
  background-color: #f0f0f0;
  text-align: center;
`;

const QuoteText = styled.p`
  font-size: 1.5em;
  font-style: italic;
  color: #333;
  max-width: 800px;
`;

const QuoteAuthor = styled.p`
  font-size: 1.2em;
  font-weight: bold;
  color: #6a0572;
  margin-top: 10px;
`;

const Quote: React.FC = () => {
  return (
    <QuoteContainer>
      <div>
        <QuoteText>"The happiness of your life depends upon the quality of your thoughts." - Marcus Aurelius</QuoteText>
        <QuoteAuthor>Marcus Aurelius</QuoteAuthor>
      </div>
    </QuoteContainer>
  );
};

export default Quote;