import React from 'react';
import Content from '../components/content';
import Layout from '../components/layout';

// eslint-disable-next-line
export default props => (
  <Layout location={props.location}>
    <Content />
  </Layout>
);
