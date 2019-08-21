import React from 'react';
import StyledContentSection from './styledContentSection';

const ContentSection = ({ children, className, id }) => (
  <StyledContentSection className={`section__content ${className}`} id={id}>
    {children}
  </StyledContentSection>
);

export default ContentSection;
