import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Helmet from 'react-helmet'

import Header from '../Header'
import Footer from '../Footer'
import 'minireset.css'

import favicon from '../../../static/favicon.png'
import config from '../../../data/config'

export default function Layout({ children }) {
  const data = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Helmet>
        <meta name="description" content={config.siteDescription} />
        <link rel="icon" href={favicon} />
      </Helmet>

      <Header siteTitle={data.site.siteMetadata.title} />

      <main>{children}</main>

      <Footer />
    </>
  )
}
