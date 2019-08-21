import styled from 'styled-components';

const StyledContentSection = styled.section`
  position: relative;
  padding: 10rem 0;

  :not(:last-child) {
    transform: translateY(-20rem);
  }

  @media only screen and (max-width: 900px) {
    padding: 7.2rem 1.5rem;
  }

  @media only screen and (max-width: 650px) {
    width: 100%;
  }
`;

export default StyledContentSection;
