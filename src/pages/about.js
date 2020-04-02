import React from 'react'

import { Layout, SEO, Container, Profile } from '../components'

import * as S from '../styles/base'

export default function About() {
  return (
    <Layout>
      <SEO pageTitle="Sobre" pageDescription="Sobre" />

      <Profile />

      <Container>
        <S.PostTitle>Sobre mim</S.PostTitle>

        <S.PostContent>
          <p>
            Sou de Brodowski, interior de São Paulo, proximo a Ribeirão Preto.
            Comecei a trabalhar como programador em 2016 na empresa Datamob como
            programador fullstack e foi onde fiquei até o meio de 2019.
            Atualmente trabalho na Dryve como programador Front-End
          </p>

          <h2>Habilidades</h2>

          <ul>
            <li>HTML</li>
            <li>CSS (Sass)</li>
            <li>Javascript</li>
            <li>Css Frameworks (Bootstrap, Materialize, Semantic UI)</li>
            <li>ReactJS / Redux / Flux</li>
            <li>Angular / RxJs</li>
            <li>Vue / Vuex</li>
            <li>NodeJS</li>
            <li>Git</li>
            <li>MySQL - Oracle</li>
            <li>O que eu não sei, aprendo rápido =)</li>
          </ul>
        </S.PostContent>
      </Container>
    </Layout>
  )
}
