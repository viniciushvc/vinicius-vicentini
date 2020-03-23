import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import { Layout, SEO, Posts, Container } from '../components'

export default function Index() {
  const { allMarkdownRemark } = useStaticQuery(
    graphql`
      query {
        allMarkdownRemark(
          limit: 2000
          sort: { fields: [fields___prefix], order: DESC }
          filter: { frontmatter: { draft: { ne: true } } }
        ) {
          edges {
            node {
              fields {
                slug
              }
              timeToRead
              frontmatter {
                title
                tags
                date(formatString: "DD/MM/YYYY")
                description
              }
            }
          }
        }
      }
    `
  )

  return (
    <Layout>
      <Container>
        <SEO pageTitle="Home" pageDescription="Home" />
        <Posts data={allMarkdownRemark} />
      </Container>
    </Layout>
  )
}