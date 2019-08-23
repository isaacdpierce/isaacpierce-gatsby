import React from 'react';
import Layout from '../components/layout';
import styled from 'styled-components';
import BlogIntro from '../components/blogIntro';
import PostList from '../components/postList';

const StyledBlogContainer = styled.div`
  color: white;
  transform: translateY(-30vh);
  margin-bottom: 100vh;
  p {
    line-height: 150%;
  }
`;

// eslint-disable-next-line
export default ({ location }) => {
  return (
    <Layout location={location}>
      <StyledBlogContainer>
        <BlogIntro />
        <PostList />
      </StyledBlogContainer>
    </Layout>
  );
};
