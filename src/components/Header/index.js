import React from 'react'

import { Container, ThemeSwitcher } from '../'

import * as S from './styled'

export default () => {
  return (
    <S.HeaderWrapper>
      <Container>
        <S.HeaderContainer>
          <S.HeaderBrand to="/">Vicentini</S.HeaderBrand>

          <S.HeaderLinks>
            <S.HeaderList>
              <S.HeaderItem>
                <S.HeaderLink to="/blog" activeClassName="active">
                  Blog
                </S.HeaderLink>
              </S.HeaderItem>

              <S.HeaderItem>
                <S.HeaderLink to="/portfolio" activeClassName="active">
                  Portfolio
                </S.HeaderLink>
              </S.HeaderItem>

              <S.HeaderItem>
                <S.HeaderLink to="/about" activeClassName="active">
                  Sobre
                </S.HeaderLink>
              </S.HeaderItem>

              <S.HeaderItem>
                <ThemeSwitcher />
              </S.HeaderItem>
            </S.HeaderList>
          </S.HeaderLinks>
        </S.HeaderContainer>
      </Container>
    </S.HeaderWrapper>
  )
}
