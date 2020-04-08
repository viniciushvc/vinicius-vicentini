import React, { useEffect } from 'react'

import { Layout, SEO } from '../../components'

import * as S from './styled'

export default function() {
  useEffect(() => {
    document.querySelector('html').style.overflow = 'hidden'

    return () => (document.querySelector('html').style.overflow = 'initial')
  }, [])

  return (
    <Layout>
      <SEO
        pageTitle="Página não encontrada"
        pageDescription="Infelizmente a página desejada não pode ser encontrada."
      />

      <S.Wrapper>
        <S.Space>
          <S.Content>
            <h1>404</h1>

            <p>Houston we have a problem</p>

            <S.Button to="/">Voltar ao início</S.Button>
          </S.Content>

          <S.Rocket src="http://salehriaz.com/404Page/img/rocket.svg" />

          <S.Earth src="http://salehriaz.com/404Page/img/earth.svg" />

          <S.Moon src="http://salehriaz.com/404Page/img/moon.svg" />

          <S.AstronautBox>
            <S.Astronaut src="http://salehriaz.com/404Page/img/astronaut.svg" />
          </S.AstronautBox>
        </S.Space>
      </S.Wrapper>
    </Layout>
  )
}
