import React from 'react';
import Layout from '../components/layout';
import styled from 'styled-components';
import BlogIntro from '../components/blogIntro';

const StyledBlogContainer = styled.div`
  color: white;
  transform: translateY(-30vh);
  margin-bottom: 100vh;
  p {
    line-height: 150%;
  }
`;

// eslint-disable-next-line
export default props => (
  <Layout location={props.location}>
    <StyledBlogContainer>
      <BlogIntro />
      <h1>BULLETS</h1>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem nulla
      perspiciatis provident eum blanditiis vero repellat eligendi dolores
      recusandae, dolore reiciendis eaque labore quaerat esse a possimus unde
      quidem beatae? Lorem ipsum dolor sit amet consectetur adipisicing elit.
      Rem nulla perspiciatis provident eum blanditiis vero repellat eligendi
      dolores recusandae, dolore reiciendis eaque labore quaerat esse a possimus
      unde quidem beatae? Lorem ipsum dolor sit amet consectetur adipisicing
      elit. Rem nulla perspiciatis provident eum blanditiis vero repellat
      eligendi dolores recusandae, dolore reiciendis eaque labore quaerat esse a
      possimus unde quidem beatae? Lorem ipsum dolor sit amet consectetur
      adipisicing elit. Rem nulla perspiciatis provident eum blanditiis vero
      repellat eligendi dolores recusandae, dolore reiciendis eaque labore
      quaerat esse a possimus unde quidem beatae? Lorem ipsum dolor sit amet
      consectetur adipisicing elit. Rem nulla perspiciatis provident eum
      blanditiis vero repellat eligendi dolores recusandae, dolore reiciendis
      eaque labore quaerat esse a possimus unde quidem beatae?
    </StyledBlogContainer>
  </Layout>
);
