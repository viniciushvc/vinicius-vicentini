import React, { Component } from 'react'
import { graphql } from 'gatsby'
import { Layout, SEO, Container, Posts } from '../../components'

export default class Tag extends Component {
  render() {
    const { data, pageContext } = this.props
    const { tag } = pageContext
    const { pathname } = this.props.location
    return (
      <Layout>
        <Container>
          <SEO
            title={`Tag: ${tag}`}
            description={`Todos os posts marcados com a tag "${tag}" no CodeStack Brasil`}
            url={pathname}
          />
          <h2>Todos os posts com a tag: {tag}</h2>

          <Posts data={data.allMarkdownRemark} />
        </Container>
      </Layout>
    )
  }
}

export const pageQuery = graphql`
  query TagPage($tag: String) {
    allMarkdownRemark(
      limit: 1000
      sort: { fields: [fields___prefix], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] }, draft: { ne: true } } }
    ) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            date(formatString: "DD/MM/YYYY")
            description
          }
        }
      }
    }
  }
`
