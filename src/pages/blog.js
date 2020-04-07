import React from 'react'

import { useStaticQuery, graphql } from 'gatsby'

import { Layout, SEO, Container, Hero, Posts } from '../components'

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
      <SEO pageTitle="Blog" pageDescription="Blog" />

      <Hero title="Blog" color="#fff" background="#005cef" />
      <Container>
        <Posts data={allMarkdownRemark} />
      </Container>
    </Layout>
  )
}
