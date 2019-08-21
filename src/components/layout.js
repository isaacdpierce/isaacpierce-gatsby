import React from 'react';
import Header from './header';
import MainNav from './mainNav';

const Layout = ({ children, location }) => (
  <main className='main__bg main__grid'>
    <section className='container__content'>
      <Header location={location} />
      <MainNav location={location} />
      {children}
    </section>
  </main>
);

export default Layout;
