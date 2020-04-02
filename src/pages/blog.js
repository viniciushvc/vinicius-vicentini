import React from 'react'

import { Layout, SEO, Container, Hero } from '../components'

export default function Index() {
  return (
    <Layout>
      <SEO pageTitle="Blog" pageDescription="Blog" />

      <Hero color="#005cef" />
      <Container>
        <h2 className="black">Blog</h2>
      </Container>
    </Layout>
  )
}
