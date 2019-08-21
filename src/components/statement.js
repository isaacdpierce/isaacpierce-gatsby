import React from 'react';
import ContentSection from '../themes/contentSection';

import styled from 'styled-components';

const StyledStatement = styled.div`
  h2 {
    font-size: 6rem;
    letter-spacing: 1rem;
    font-family: 'Fira Mono', monospace;
    padding-left: 1rem;
  }
  .highlight {
    display: inline;
    background-color: #5c5149;
    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.527);
    border-radius: 2px;
    padding-left: -10rem;
  }

  @media only screen and (max-width: 900px) {
    h2 {
      font-size: 6rem;
    }
  }
`;

const Statement = ({ words }) => {
  const wordsArray = words.split(' ');
  const statement = wordsArray.map((word, i) => {
    const w = word.toLowerCase();
    if (w === 'builds' || w === 'lives' || w === 'sharp.' || w === 'refines') {
      return (
        <h2 key={i} className='highlight'>
          {word}
        </h2>
      );
    }
    return <h2 key={i}>{word}</h2>;
  });

  return (
    <ContentSection>
      <StyledStatement>{statement}</StyledStatement>
    </ContentSection>
  );
};

export default Statement;
