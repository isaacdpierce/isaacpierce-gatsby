import React from 'react';
import ContentSection from '../themes/contentSection';
import icons from '../images/icons/tools';
import StyledIcon from '../themes/styledIcon';
import StyledIconList from '../themes/styledIconList';

const Tools = ({ id, title, types }) => {
  const tools = types.map((type, i) => {
    const source = icons[`${type}`];
    return (
      <li key={i}>
        <StyledIcon src={source} alt={`${type} icon`} />
        {type}
      </li>
    );
  });

  const toolsRow1 = tools.slice(0, 5);
  const toolsRow2 = tools.slice(5, 10);

  return (
    <ContentSection id={id} className='darken-bg'>
      <h6>{title}</h6>
      <StyledIconList>{toolsRow1}</StyledIconList>
      <StyledIconList>{toolsRow2}</StyledIconList>
    </ContentSection>
  );
};

export default Tools;
