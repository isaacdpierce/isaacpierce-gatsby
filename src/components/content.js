import React from 'react';
import Statement from './statement';
import HappyList from './happyList';
import Stone from './stone';
import MiniBio from './miniBio';
import Conduct from './conduct';
import Tools from './tools';
import Goals from './goals';
import Portfolio from './portfolio';
import Interests from './interests';

const Content = () => (
  <>
    <Statement words='builds strong code.' />
    <HappyList />
    <Stone>What kind of person do you want to work with?</Stone>
    <MiniBio />
    <Statement words='Lives by the code.' />
    <Conduct />
    <Statement words='Keeps his tools sharp.' />
    <Tools
      id='tools'
      title='Tools of passion'
      types={[
        'html',
        'css',
        'javascript',
        'react',
        'node',
        'sass',
        'git',
        'postman',
        'postgres',
        'figma',
      ]}
    />
    <Statement words='Refines the edge.' />
    <Tools
      title='Honing new tools'
      types={['gatsby', 'graphql', 'meteor', 'typescript', 'docker']}
    />
    <Stone>
      How will the person you hire now be contributing to the success of your
      company in 5 years from now?
    </Stone>
    <Goals />
    <Portfolio />
    <Interests />
    {/* This is an anchor to get the contact menu to fully open at the bottom of the page for autoscroll */}
    <p id='contact' />
  </>
);

export default Content;
