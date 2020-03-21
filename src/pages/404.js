import React from 'react'

import Layout from '../components/Layout'
import SEO from '../components/SEO'

const NotFoundPage = () => (
  <Layout>
    <SEO
      pageTitle="Página não encontrada"
      pageDescription="Infelizmente a página desejada não pode ser encontrada."
    />
    <h1>404 - NOT FOUND</h1>
    <p>Infelizmente a página desejada não pode ser encontrada!</p>
  </Layout>
)

export default NotFoundPage
