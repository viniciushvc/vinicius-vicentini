import React from 'react'

import * as S from './styled'

import { Container } from '../'

export default () => {
  return (
    <S.FooterWrapper>
      <Container>
        <S.Footer>© {new Date().getFullYear()} Vicentini</S.Footer>
      </Container>
    </S.FooterWrapper>
  )
}
