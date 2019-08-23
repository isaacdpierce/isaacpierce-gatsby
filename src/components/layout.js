import React from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import Header from './header';
import MainNav from './mainNav';
import rhino from '../images/rhino.png';
import smallRhino from '../images/rhino-small.png';

const StyledMain = styled.main.attrs({ classname: 'main-container' })`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  background: rgb(26, 24, 23) url(${rhino}) no-repeat;
  background-position: right;
  background-attachment: fixed;
  background-size: cover;

  .container__content {
    grid-column: 2 / span 6;
    grid-row: 1 / -1;
  }

  .highlight {
    display: inline;
    background-color: #5c5149;
    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.527);
    border-radius: 2px;
    padding-left: -10rem;
  }

  .mb-lg {
    margin-bottom: 80vh;
  }

  .mb-xlg {
    margin-bottom: 150vh;
  }

  @media only screen and (max-width: 1300px) {
    .container__content {
      grid-column: 2 / span 6;
      min-width: 350px;
    }
  }

  @media only screen and (max-width: 900px) {
    background: url(${smallRhino}) no-repeat;
    background-position: right bottom;
    background-attachment: fixed;
    background-size: cover;
    min-width: 351px;

    .container__content {
      grid-column: 1 / 13;
      background-color: rgba(0, 0, 0, 0.201);
    }

    .darken-bg {
      background-color: rgba(0, 0, 0, 0.201);
    }
  }

  @media only screen and (max-width: 650px) {
    .container__content {
      background-color: rgba(0, 0, 0, 0.475);
    }
    .darken-bg {
      background-color: rgba(0, 0, 0, 0.53);
    }
  }
`;

const Layout = ({ children }) => (
  <>
    <Helmet>
      <meta charSet='utf-8' />
      <title>Isaac Pierce | Web Developer</title>
    </Helmet>
    <StyledMain>
      <section className='container__content'>
        <Header />
        <MainNav />
        {children}
      </section>
    </StyledMain>
  </>
);
export default Layout;
