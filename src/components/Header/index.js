import React from 'react'

import { Container, ThemeSwitcher } from '../'

import * as S from './styled'

export default ({ color }) => {
  return (
    <S.HeaderWrapper>
      <Container>
        <S.HeaderContainer>
          <S.HeaderBrand to="/" color={color}>
            Vicentini
          </S.HeaderBrand>

          <S.HeaderLinks>
            <S.HeaderList>
              <S.HeaderItem>
                <S.HeaderLink to="/blog" color={color} activeClassName="active">
                  Blog
                </S.HeaderLink>
              </S.HeaderItem>

              <S.HeaderItem>
                <S.HeaderLink
                  to="/portfolio"
                  color={color}
                  activeClassName="active"
                >
                  Portfolio
                </S.HeaderLink>
              </S.HeaderItem>

              <S.HeaderItem>
                <S.HeaderLink
                  to="/about"
                  color={color}
                  activeClassName="active"
                >
                  Sobre
                </S.HeaderLink>
              </S.HeaderItem>

              <S.HeaderItem>
                <ThemeSwitcher color={color} />
              </S.HeaderItem>
            </S.HeaderList>
          </S.HeaderLinks>
        </S.HeaderContainer>
      </Container>
    </S.HeaderWrapper>
  )
}
