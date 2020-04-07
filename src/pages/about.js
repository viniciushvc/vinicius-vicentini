import React from 'react'

import { Layout, SEO, Container, Hero } from '../components'

import * as S from '../styles/base'

export default function About() {
  return (
    <Layout>
      <SEO pageTitle="Sobre" pageDescription="Sobre" />

      <Hero title="Sobre mim" color="#fff" background="#843B62" />

      <Container>
        <S.PostTitle style={{ marginTop: '40px' }}>Resumo</S.PostTitle>

        <S.PostContent>
          <p>
            Sou de Brodowski, interior de São Paulo, proximo a Ribeirão Preto.
            Comecei a trabalhar como programador em 2016 na empresa Datamob como
            programador fullstack e foi onde fiquei até o meio de 2019.
            Atualmente trabalho na Dryve como programador Front-End.
          </p>

          <h2>Educação</h2>

          <ul>
            <li>
              2015-2016
              <ul>
                <li>Informática</li>

                <li>ETEC José Martimiano da Silva</li>
              </ul>
            </li>

            <li>
              2016-2019
              <ul>
                <li>Ciência da computação</li>

                <li>Centro Universitário Barão de Mauá</li>
              </ul>
            </li>
          </ul>

          <h2>Habilidades</h2>

          <ul>
            <li>HTML</li>
            <li>CSS (Sass)</li>
            <li>C</li>
            <li>C# e .NET</li>
            <li>Java</li>
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
