import styled from 'styled-components';

export const StyledIcon = styled.img`
  height: 6rem;
  width: 6rem;
  background: radial-gradient(rgb(255, 255, 255), transparent);
  margin-bottom: 2rem;
  padding: 0.75rem;
  border-radius: 3px;
  @media only screen and (max-width: 400px) {
    height: 5rem;
    width: 5rem;
  }
`;

export default StyledIcon;
