import React from 'react'

import { Layout, SEO, Container, Hero, Portfolio } from '../../components'

import * as S from './styled'

export default function About() {
  const items = [
    {
      name: 'Podcasts react',
      link: 'https://github.com/viniciushvc/podcast-react',
    },
    {
      name: 'React grid system',
      link: 'https://github.com/viniciushvc/react-grid-system',
    },
    {
      name: 'Lading page',
      link: 'https://github.com/viniciushvc/landing-page',
    },
    {
      name: 'Podquest ',
      link: 'https://github.com/viniciushvc/podquest',
    },
    {
      name: 'Delivery comida',
      link: 'https://github.com/viniciushvc/delivery-comida-react',
    },
    {
      name: 'Vinicius Vicentini',
      link: 'https://github.com/viniciushvc/vinicius-vicentini',
    },
  ]

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
          <Portfolio items={items} />
        </Container>
      </S.PortfolioWrapper>
    </Layout>
  )
}
