import React from 'react';
import styled from 'styled-components';

const StyledBlogIntro = styled.section`
  transform: translateY(-50vh);
  h1 {
    font-weight: 500;
    color: #b37519;
    margin-bottom: 12rem;
  }
`;

// eslint-disable-next-line
export default () => (
  <StyledBlogIntro>
    <h1>Welcome.</h1>
    <h6>If you love:</h6>
    <p>Saving time. Cutting to the chase. Bullet points.</p>
    <h6>DevBullets is for you.</h6>
  </StyledBlogIntro>
);
