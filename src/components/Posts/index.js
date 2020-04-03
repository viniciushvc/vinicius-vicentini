import React from 'react'

import { Button } from '../'

import * as S from './styled'

export default ({ home = false, data }) => {
  const { edges } = data

  return (
    <S.PostsWrapper>
      {home && <h2 className="black">Últimos posts</h2>}

      <S.PostsList>
        {edges.map(({ node }) => (
          <S.PostLink to={node.fields.slug} key={node.fields.slug}>
            <S.Post>
              <S.PostTitle>{node.frontmatter.title}</S.PostTitle>
            </S.Post>
          </S.PostLink>
        ))}
      </S.PostsList>

      {home && <Button to="/blog">Veja mais</Button>}
    </S.PostsWrapper>
  )
}
