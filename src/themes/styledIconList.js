import styled from 'styled-components';

export const StyledIconList = styled.ul`
  width: 100%;
  max-width: 95vw;
  display: flex;
  justify-content: space-between;
  margin: 0.8rem 0;

  li {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    color: rgb(190, 190, 190);
    text-transform: uppercase;
  }

  a {
    font-weight: 100;
  }
`;

export default StyledIconList;
