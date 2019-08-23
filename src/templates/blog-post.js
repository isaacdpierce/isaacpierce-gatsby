import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import ContentSection from '../themes/contentSection';
import styled from 'styled-components';
import bullet from '../images/bullet-white.svg';

const StyledPost = styled.article`
  strong {
    color: #7696a2;
    display: inline-block;
    padding-top: 2rem;
  }
  em {
    display: inline-block;
    font-weight: 400;
    font-size: 1.8rem;
  }
  ul,
  ol {
    margin: 0;
  }

  li {
    margin: 0.7rem 0;
    line-height: 150%;
  }

  li :before {
    content: '';
    background-image: url(${bullet});
    height: 20px;
    width: 20px;
    z-index: 99;
  }
`;

// eslint-disable-next-line
export default ({ data }) => {
  const post = data.markdownRemark;
  return (
    <Layout>
      <ContentSection className='mb-xlg darken-bg'>
        <h6>{post.frontmatter.title}</h6>
        <StyledPost dangerouslySetInnerHTML={{ __html: post.html }} />
      </ContentSection>
    </Layout>
  );
};

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`;
