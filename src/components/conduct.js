import React from 'react';
import ContentSection from '../themes/contentSection';
import styled from 'styled-components';

const StyledHeader = styled.h3`
  padding-top: 3rem;
  font-size: 2.5rem;
`;

const Conduct = () => (
  <ContentSection id='conduct' className='conduct darken-bg'>
    <StyledHeader>Code of conduct</StyledHeader>
    <h6>In person and in code</h6>
    <div>
      <ul>
        <li>Be clear and honest with all my tools for communication</li>
        <li>Be mindful of what is essential</li>
        <li>Be courteous to others</li>
        <li>Always be learning</li>
        <li>Be considerate to my future self</li>
        <li>Uphold integrity with the people I work with</li>
        <li>Set the ego aside and be open to other's perspectives</li>
      </ul>
      <h6>In code</h6>
      <ul>
        <li>Maintain best practices in creating durable and readable code</li>
        <li>
          Always use the best tools available to write fast and efficient
          programs
        </li>
        <li>Build websites that are accessible to all</li>
      </ul>
      <h6>In person</h6>
      <ul>
        <li>Always ask questions when clarification is needed</li>
        <li>Practice deep listening when others are speaking to me</li>
      </ul>
    </div>
  </ContentSection>
);

export default Conduct;
