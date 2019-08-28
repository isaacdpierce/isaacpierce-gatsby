import React from 'react';
import { Link } from 'gatsby';
import ContactForm from './contactForm';
import StyledSocialIcon from '../themes/styledSocialIcon';
import useSiteMetadata from '../hooks/useSiteMetadata';
import icons from '../images/icons/social';
import styled from 'styled-components';

const StyledMainNav = styled.nav.attrs({ className: 'nav' })`
  align-items: center;
  background: #1d1a19;
  display: flex;
  flex-direction: column;
  height: 86.5vh;
  justify-content: flex-start;
  position: -webkit-sticky;
  position: sticky;
  text-align: center;
  top: 94vh;
  z-index: 99;

  ul {
    list-style-type: none;
    padding-left: 0;
    min-width: 330px;
  }

  .list-flex {
    width: 100%;
    max-width: 95vw;
    display: flex;
    justify-content: space-between;
    margin: 0.8rem 0;
    text-transform: uppercase;
  }

  .contact p {
    color: #344a52;
    font-size: 1.8rem;
    font-weight: bold;
    text-shadow: 1px 1px 2px black;
    padding: 0.3rem;
  }

  .contact {
    height: 100%;
  }

  .contact a {
    font-size: 1.8rem;
  }

  p.contact__tag {
    font-size: 1.6rem;
    font-weight: 100;
    color: #d3d3d3ce;
  }

  .copyright {
    justify-self: flex-end;
    color: #413834;
    padding: 2rem;
  }

  @media only screen and (max-width: 900px) {
    width: 100%;
    padding: 0 2rem;
  }
  @media only screen and (max-width: 650px) {
    height: 87.5vh;
    background: #171414;
  }

  @media only screen and (max-width: 350px) {
    top: 103vh;
  }
`;

const MainNav = () => {
  const { navItems } = useSiteMetadata();
  const nav = navItems.map((item, i) => (
    <li key={i}>
      <Link to={item === 'blog' ? `/${item}` : `#${item}`}>{item}</Link>
    </li>
  ));

  return (
    <StyledMainNav>
      <ul className='list-flex'>{nav}</ul>
      <section className='contact'>
        <p>Thanks for checking out my site.</p>
        <p>Contact me anytime.</p>
        <p className='contact__tag'>
          email:
          <a href='mailto:hello@isaacpierce.io' rel='noopener noreferrer'>
            {' '}
            hello@isaacpierce.io
          </a>
        </p>

        <div className='icons'>
          <a
            href='https://github.com/isaacdpierce'
            target='_blank'
            rel='noopener noreferrer'
          >
            <StyledSocialIcon src={icons.github} alt='Github icon' />
          </a>
          <a
            href='https://twitter.com/isaacdpierce'
            target='_blank'
            rel='noopener noreferrer'
          >
            <StyledSocialIcon src={icons.twitter} alt='Twitter icon' />
          </a>
          <a
            href='https://www.linkedin.com/in/isaac-pierce-28ba41171/'
            target='_blank'
            rel='noopener noreferrer'
          >
            <StyledSocialIcon src={icons.linkedin} alt='LinkedIn icon' />
          </a>
        </div>
        <ContactForm />
      </section>
      <section className='copyright'>
        Copyright &copy;2019 Built by Isaac Pierce
      </section>
    </StyledMainNav>
  );
};

export default MainNav;
