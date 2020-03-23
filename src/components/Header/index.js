import React from 'react'

import { Container } from '../'

import * as S from './styled'

export default () => {
  return (
    <S.HeaderWrapper>
      <Container>
        <S.HeaderContainer>
          <S.HeaderBrand to="/">Vicentini Vicentini</S.HeaderBrand>

          <S.HeaderLinks>
            <S.HeaderList>
              <S.HeaderItem>
                <S.HeaderLink to="/about">Sobre</S.HeaderLink>
              </S.HeaderItem>
            </S.HeaderList>
          </S.HeaderLinks>
        </S.HeaderContainer>
      </Container>
    </S.HeaderWrapper>
  )
}
