import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import styled from 'styled-components';
import bullet from '../images/bullet-white.svg';

const StyledPost = styled.article`
  padding: 5rem 0;
  transform: translateY(-60rem);
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
    margin-bottom: 5rem;
  }

  li {
    margin: 0.7rem 0;
    line-height: 150%;
  }

  ul li {
    list-style: none;
  }

  ul li:before {
    content: '';
    background-image: url(${bullet});
    background-repeat: no-repeat;
    background-position: center;
    transform: translate(-12px, -3px);
    height: 6px;
    width: 12px;
    display: inline-block;
    z-index: 99;
  }
`;

// eslint-disable-next-line
export default ({ data }) => {
  const post = data.markdownRemark;
  return (
    <Layout>
      <StyledPost className='mb-xlg darken-bg'>
        <h6>{post.frontmatter.title}</h6>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </StyledPost>
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
