import React from 'react'

import { Container } from '../'

import * as S from './styled'

export default function({ background, color, title, description }) {
  return (
    <S.HeroWrapper background={background}>
      <Container>
        <S.HeroTitle className="black" color={color}>
          {title}
        </S.HeroTitle>

        <S.HeroDescription color={color}>{description}</S.HeroDescription>
      </Container>
    </S.HeroWrapper>
  )
}
