import React from 'react';
import useSiteMetadata from '../hooks/useSiteMetadata';
import styled from 'styled-components';
import rhino from '../images/rhino.png';
import rhinoSmall from '../images/rhino-small.png';

const StyledHeader = styled.header.attrs({
  className: 'container__logo',
  role: 'banner',
})`
  background: url(${rhino});
  background-position: right;
  background-attachment: fixed;
  background-size: cover;
  padding-bottom: 1rem;
  position: sticky;
  top: -39vh;
  z-index: 99;

  :before {
    content: '';
    display: block;
    height: 52vh;
    width: 100%;
    margin-bottom: -3rem;
  }

  .logo h1 {
    padding-left: 0;
    font-family: 'Fira Sans', sans-serif;
    font-size: 2rem;
    letter-spacing: 0.5rem;
  }

  @media only screen and (max-width: 1300px) {
    .logo h1 {
      font-size: 1.8rem;
    }
  }

  @media only screen and (max-width: 900px) {
    background: url(${rhinoSmall});
    background-position: right bottom;
    background-attachment: fixed;
    background-size: cover;

    :before {
      background-color: rgba(0, 0, 0, 0.201);
    }

    .logo {
      padding-left: 2rem;
    }

    .logo h1 {
      padding-right: 0.75rem;
    }
  }

  @media only screen and (max-width: 650px) {
    .logo {
      padding-left: 1rem;
    }

    .logo h1 {
      color: white;
      line-height: 110%;
      letter-spacing: 4px;
    }

    :before {
      background-color: rgba(0, 0, 0, 0.475);
    }

    :before {
      margin-bottom: -2.9rem;
    }
  }
  @media only screen and (max-width: 400px) {
    .logo h1 {
      line-height: 115%;
      letter-spacing: 3px;
    }

    .container__logo:before {
      margin-bottom: -3rem;
    }
  }
`;

const Header = () => {
  const { title } = useSiteMetadata();
  return (
    <StyledHeader>
      <div className='logo'>
        <h1>{title}</h1>
      </div>
    </StyledHeader>
  );
};

export default Header;
