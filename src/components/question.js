import React from 'react';
import ContentSection from '../themes/contentSection';
import styled from 'styled-components';
import texture from '../images/redox-01.png';

const StyledQuestion = styled.div`
  background: rgb(49, 49, 49);
  border-radius: 5px;
  height: 100%;
  width: 95%;
  transform: translateX(5px);

  .question {
    width: 100%;
    margin: 0;
    padding: 5rem 6rem;
    border-radius: 5px;
    text-align: center;
    background: url(${texture});
    background-size: cover;
    border-top: 1px outset rgb(165, 165, 165);
    border-bottom: 3px solid rgb(45, 45, 45);
    border-right: 3px solid rgb(45, 45, 45);
    border-left: 2px solid rgb(45, 45, 45);
    box-shadow: 0px 2px 3px 2px #00000033;
  }

  .question h3 {
    font-weight: bold;
    font-size: 2.5rem;
    color: rgba(0, 0, 0, 0.74);
    text-shadow: 1px 1px 1px rgba(255, 255, 255, 0.233);
  }
`;

const Question = ({ text }) => (
  <ContentSection>
    <StyledQuestion>
      <div className='question'>
        <h3>{text}</h3>
      </div>
    </StyledQuestion>
  </ContentSection>
);

export default Question;
