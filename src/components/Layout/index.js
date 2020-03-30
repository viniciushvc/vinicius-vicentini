import React from 'react'
import Helmet from 'react-helmet'

import { useStaticQuery, graphql } from 'gatsby'

import { Header, Footer, ThemeSwitcher } from '../'

import GlobalStyles from '../../styles/global'

import * as S from './styled'

import favicon from '../../../static/favicon.png'
import config from '../../../data/config'

export default ({ children }) => {
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

      <GlobalStyles />

      <ThemeSwitcher />

      <Header siteTitle={data.site.siteMetadata.title} />

      <S.Main>{children}</S.Main>

      <Footer />
    </>
  )
}
