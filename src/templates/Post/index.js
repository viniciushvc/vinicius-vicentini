import React, { Component } from 'react'
import { graphql } from 'gatsby'

import { Layout, SEO, Container } from '../../components'

import * as S from './styled'

export default class Post extends Component {
  render() {
    const { data } = this.props
    const { title, date, description } = data.markdownRemark.frontmatter
    const { html } = data.markdownRemark
    const { fields } = data.markdownRemark
    const { slug } = fields

    return (
      <Layout>
        <Container maxWidth="1000px">
          <S.PostWrapper>
            <SEO title={title} url={slug} description={description} article />
            <S.PostDate>{date}</S.PostDate>

            <S.PostTitle>{title}</S.PostTitle>

            <S.PostContent>
              <p dangerouslySetInnerHTML={{ __html: html }} />
            </S.PostContent>
          </S.PostWrapper>
        </Container>
      </Layout>
    )
  }
}

export const pageQuery = graphql`
  query PostPage($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      timeToRead
      excerpt
      frontmatter {
        title
        date(formatString: "DD/MM/YYYY")
        tags
        description
      }
      fields {
        slug
      }
    }
  }
`
