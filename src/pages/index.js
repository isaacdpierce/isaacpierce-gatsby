import React from 'react';
import Header from '../components/header';
import MainNav from '../components/mainNav';
import Content from '../components/content';

// eslint-disable-next-line
export default () => (
  <main className='main__bg main__grid'>
    <section className='container__content'>
      <Header />
      <MainNav />
      <Content />
    </section>
  </main>
);
