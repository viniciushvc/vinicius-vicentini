import React from 'react'

import * as S from './styled'

import { Container } from '../'

export default () => {
  return (
    <S.FooterWrapper>
      <Container>© {new Date().getFullYear()} - Vinicius Vicentini</Container>
    </S.FooterWrapper>
  )
}
