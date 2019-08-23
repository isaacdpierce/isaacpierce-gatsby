import React from 'react';
import { graphql, useStaticQuery, Link } from 'gatsby';
import styled from 'styled-components';
import ContentSection from '../themes/contentSection';

const StyledBlogItem = styled.div`
  background-color: rgba(0, 0, 0, 0.495);
  border-radius: 3px;
  border: 1px solid black;
  padding: 2px 3rem 3rem 3rem;
  margin-bottom: 3rem;
`;

const HappyList = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
        totalCount
        edges {
          node {
            id
            frontmatter {
              title
              date(formatString: "DD MMMM, YYYY")
            }
            excerpt
            fields {
              slug
            }
          }
        }
      }
    }
  `);

  return (
    <ContentSection className='darken-bg'>
      <h4>{data.allMarkdownRemark.totalCount} Posts</h4>
      {data.allMarkdownRemark.edges.map(({ node }) => (
        <StyledBlogItem key={node.id}>
          <h6>{node.frontmatter.title}</h6>
          <h5>{node.frontmatter.date}</h5>
          <p>{node.excerpt}</p>
          <Link to={node.fields.slug}>more</Link>
        </StyledBlogItem>
      ))}
    </ContentSection>
  );
};

export default HappyList;
