import React from 'react'

import { FiGithub, FiLinkedin, FiTwitter } from 'react-icons/fi'

import * as S from './styled'

import { Container } from '../'

export default () => {
  const items = [
    { link: 'https://github.com/viniciushvc', icon: <FiGithub /> },
    { link: 'https://www.linkedin.com/in/viniciushvc/', icon: <FiLinkedin /> },
    { link: 'https://twitter.com/ViniciusHVC', icon: <FiTwitter /> },
  ]

  return (
    <S.FooterWrapper>
      <Container>
        <S.Footer>
          <S.Social>
            {items.map(item => (
              <S.SocialLink
                key={item.link}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                {item.icon}
              </S.SocialLink>
            ))}
          </S.Social>
          © {new Date().getFullYear()} Vicentini
        </S.Footer>
      </Container>
    </S.FooterWrapper>
  )
}
