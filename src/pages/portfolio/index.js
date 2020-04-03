import React from 'react'

import { Layout, SEO, Container, Hero } from '../../components'

import * as S from './styled'

export default function About() {
  return (
    <Layout>
      <SEO pageTitle="Portfolio" pageDescription="Portfolio" />

      <Hero
        title="Portfólio"
        description="Alguns de meus trabalhos e projetos"
        color="#fff"
        background="#4AAD52"
      />

      <S.PortfolioWrapper>
        <Container>
          <h2 className="black">Projetos</h2>
        </Container>
      </S.PortfolioWrapper>
    </Layout>
  )
}
