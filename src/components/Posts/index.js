import React from 'react'

import { Button } from '../'

import * as S from './styled'

export default ({ data }) => {
  const { edges } = data

  return (
    <S.PostsWrapper>
      <h2 className="black">Últimos posts</h2>

      <S.PostsList>
        {edges.map(({ node }) => (
          <S.PostLink to={node.fields.slug} key={node.fields.slug}>
            <S.Post>
              <S.PostTitle>{node.frontmatter.title}</S.PostTitle>
            </S.Post>
          </S.PostLink>
        ))}
      </S.PostsList>

      <Button to="/blog">Ver todos os posts</Button>
    </S.PostsWrapper>
  )
}
