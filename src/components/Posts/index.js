import React from 'react'

import * as S from './styled'

export default ({ data }) => {
  const { edges } = data

  return (
    <S.PostsWrapper>
      {edges.map(({ node }) => (
        <S.Post key={node.fields.slug}>
          <S.PostLink to={node.fields.slug}>
            <S.PostTitle>{node.frontmatter.title}</S.PostTitle>

            <S.PostDate>{node.frontmatter.date}</S.PostDate>
          </S.PostLink>
        </S.Post>
      ))}
    </S.PostsWrapper>
  )
}
