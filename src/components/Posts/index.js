import React from 'react'

import * as S from './styled'

export default ({ data }) => {
  const { edges } = data

  return (
    <S.PostsWrapper>
      {edges.map(({ node }) => (
        <S.PostLink to={node.fields.slug} key={node.fields.slug}>
          <S.Post>
            <S.PostTitle>{node.frontmatter.title}</S.PostTitle>
          </S.Post>
        </S.PostLink>
      ))}
    </S.PostsWrapper>
  )
}
