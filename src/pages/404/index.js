import React from 'react'

import { Layout, SEO } from '../../components'

import { Space, Astronaut, Moon, Earth } from '../../assets/404'

import * as S from './styled'

export default function() {
  return (
    <Layout>
      <SEO
        pageTitle="Página não encontrada"
        pageDescription="Infelizmente a página desejada não pode ser encontrada."
      />

      <S.Wrapper>
        <S.Space background={Space}>
          <S.Content>
            <h1>404</h1>

            <p>Houston we have a problem</p>

            <S.Button to="/">Voltar ao início</S.Button>
          </S.Content>

          <S.Earth src={Earth} />

          <S.Moon src={Moon} />

          <S.AstronautBox>
            <S.Astronaut src={Astronaut} />
          </S.AstronautBox>
        </S.Space>
      </S.Wrapper>
    </Layout>
  )
}
