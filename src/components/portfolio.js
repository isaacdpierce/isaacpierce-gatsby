import React from 'react';
import ContentSection from '../themes/contentSection';
import images from '../images/portfolio-images';
import styled from 'styled-components';

const StyledPortfolio = styled.div`
  .slide {
    max-width: 550px;
    margin: 0;
    margin-bottom: 5rem;
    padding: 2rem;
    background-color: rgba(0, 0, 0, 0.495);
  }

  .slide__image {
    width: 100%;
  }

  .slide__linkbox {
    padding-bottom: 1rem;
    display: flex;
    justify-content: space-between;
    text-transform: uppercase;
  }

  .slide__linkbox a {
    padding: 5px 7px;
    border: 1px solid rgb(134, 67, 24);
    border-radius: 2px;
    font-size: 2rem;
    color: rgb(134, 67, 24);
    transition: all 0.3s;
  }

  .slide__linkbox a:hover {
    color: rgb(173, 86, 32);
    box-shadow: inset 0px 0px 15px rgba(155, 77, 28, 0.281);
  }

  @media only screen and (max-width: 650px) {
    .slide {
      padding: 1rem;
    }
  }
`;

const Portfolio = () => (
  <ContentSection id='portfolio'>
    <StyledPortfolio>
      <h6>I made these</h6>
      <figure className='slide'>
        <cite>Beatscape</cite>
        <a
          href='https://beatscape.netlify.com/'
          target='_blank'
          rel='noopener noreferrer'
        >
          <img
            className='slide__image'
            src={images.beatscape}
            alt='My Beatscape App'
          />
        </a>
        <figcaption>
          Allows a user to control all levels in a music composition. Allows a
          user to animate the sound levels for a dynamic 3D listening
          experience.
          <br />
          <hr />
          Javascript + React + Node + Postgresql
          <br />+ AWS S3 + Web Audio API
        </figcaption>
        <div className='slide__linkbox'>
          <a
            href='https://beatscape.netlify.com/'
            target='_blank'
            rel='noopener noreferrer'
          >
            Live
          </a>
          <a
            href='https://github.com/isaacdpierce/beatscape'
            target='_blank'
            rel='noopener noreferrer'
          >
            Github Client
          </a>
          <a
            href='https://github.com/isaacdpierce/beatscape-server-knex'
            target='_blank'
            rel='noopener noreferrer'
          >
            Github Server
          </a>
        </div>
      </figure>
      <figcaption className='slide'>
        <cite>Design Rocket</cite>
        <a
          href='https://designrocket.netlify.com/'
          target='_blank'
          rel='noopener noreferrer'
        >
          <img
            className='slide__image'
            src={images.designRocket}
            alt='My Design Rocket App'
          />
        </a>
        <figcaption>
          A dashboard app to centralize my favorite design tools. Using
          3rd-party API data with JS fetch.
          <br />
          <hr />
          HTML + CSS + Javascript + jQuery + fetch API
        </figcaption>
        <div className='slide__linkbox'>
          <a
            href='https://designrocket.netlify.com/'
            target='_blank'
            rel='noopener noreferrer'
          >
            Live
          </a>
          <a
            href='https://github.com/isaacdpierce/design-rocket'
            target='_blank'
            rel='noopener noreferrer'
          >
            Github
          </a>
        </div>
      </figcaption>
      <figure className='slide'>
        <cite>Quiz App</cite>
        <a
          href='https://isaacdpierce.github.io/svg-quiz-app/'
          target='_blank'
          rel='noopener noreferrer'
        >
          <img
            className='slide__image'
            src={images.quizApp}
            alt='My SVG Quiz App'
          />
        </a>
        <figcaption>
          I built this quiz app to get a stronger understanding of DOM event
          handling and accessible form inputs.
          <br />
          <hr />
          HTML + CSS + Javascript + jQuery
        </figcaption>
        <div className='slide__linkbox'>
          <a
            href='https://isaacdpierce.github.io/svg-quiz-app/'
            target='_blank'
            rel='noopener noreferrer'
          >
            Live
          </a>
          <a
            href='https://github.com/isaacdpierce/svg-quiz-app'
            target='_blank'
            rel='noopener noreferrer'
          >
            Github
          </a>
        </div>
      </figure>
      <figure className='slide'>
        <cite>Animated Event Countdown App</cite>
        <a
          href='http://endurable-protest.surge.sh/'
          target='_blank'
          rel='noopener noreferrer'
        >
          <img
            className='slide__image'
            src={images.eventApp}
            alt='My Event App'
          />
        </a>
        <figcaption>
          I built this SPA to learn more about React and play with some React
          animation libraries.
          <br />
          <hr />
          Create-react-app + React + JSX + React animation libraries
        </figcaption>
        <div className='slide__linkbox'>
          <a
            href='http://endurable-protest.surge.sh/'
            target='_blank'
            rel='noopener noreferrer'
          >
            Live
          </a>
          <a
            href='https://github.com/isaacdpierce/event_app'
            target='_blank'
            rel='noopener noreferrer'
          >
            Github
          </a>
        </div>
      </figure>
    </StyledPortfolio>
  </ContentSection>
);

export default Portfolio;
