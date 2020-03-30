import React from 'react'

import { Layout, SEO, Container, Hero } from '../components'

import * as S from '../styles/base'

export default function About() {
  return (
    <Layout>
      <SEO pageTitle="Sobre" pageDescription="Sobre" />

      <Hero />

      <Container>
        <h1>Sobre mim</h1>

        <h1>
          Sou programador desde 2016, porém com foco em front-end ultimamente,
          com foco em UI e desempenho. Atualmente trabalho na Dryve , empresa de
          venda de véiculos semi novos com a missão de garantir a maior
          segurança e facilitar o contato de compradores e vendedores. Formação
          Cincia da computação Trabalhos anteriores Datamob informática
        </h1>

        <h1>
          Eu amo trabalhar em equipe e sou bem comunicativo. No meu tempo livre,
          gosto de ensinar meus amigos sobre alguma coisa que aprendi, acho que
          por isso nasceu esse blog.
        </h1>

        <h2>Habilidades</h2>

        <ul>
          <li>HTML e Template Languages</li>
          <li>Design Responsivo (Mobile First)</li>
          <li>CSS (Stylus, Sass, Less, PostCSS)</li>
          <li>Css Frameworks (Bootstrap, Foundation, Bulma)</li>
          <li>Javascript (Design Patterns, Testes, ES6/7)</li>
          <li>ReactJS / Redux / Flux</li>
          <li>NodeJS</li>
          <li>Automatizadores (Grunt, Gulp, Webpack, Parcel)</li>
          <li>Git</li>
          <li>Python</li>
          <li>Ruby / Rails</li>
          <li>MySQL - MongoDB</li>
          <li>Scrum and Kanban</li>
          <li>TDD e Continuous Integration</li>
          <li>O que eu não sei, aprendo rápido =)</li>
        </ul>

        <h2>Contato</h2>

        <h1>
          Você pode entrar em contato comigo através de qualquer uma das minhas
          redes sociais.
        </h1>
      </Container>
    </Layout>
  )
}
