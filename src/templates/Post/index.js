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
        <S.PostImage src="https://images.unsplash.com/photo-1500576992153-0271099def59?ixlib=rb-1.2.1&auto=format&fit=crop&w=1250&q=50"></S.PostImage>

        <Container>
          <S.PostWrapper>
            <S.PostDate>{date}</S.PostDate>

            <S.PostTitle>{title}</S.PostTitle>

            <SEO title={title} url={slug} description={description} article />

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
