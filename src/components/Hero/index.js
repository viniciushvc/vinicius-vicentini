import React from 'react'

import { Container } from '../'

import * as S from './styled'

import { FiGithub, FiLinkedin, FiTwitter, FiInstagram } from 'react-icons/fi'

export default () => {
  return (
    <S.HeroWrapper>
      <Container>
        <S.HeroContainer>
          <S.ImageWrapper>
            <S.Image src="https://avatars3.githubusercontent.com/u/16567830" />
          </S.ImageWrapper>

          <S.SocialList>
            <S.SocialItem>
              <S.SocialLink
                href="https://github.com/viniciushvc"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FiGithub size="25" color="#000" />
              </S.SocialLink>
            </S.SocialItem>

            <S.SocialItem>
              <S.SocialLink
                href="https://github.com/viniciushvc"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FiLinkedin size="25" color="#000" />
              </S.SocialLink>
            </S.SocialItem>

            <S.SocialItem>
              <S.SocialLink
                href="https://twitter.com/ViniciusHVC"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FiTwitter size="25" color="#000" />
              </S.SocialLink>
            </S.SocialItem>

            <S.SocialItem>
              <S.SocialLink
                href="https://www.instagram.com/viniciusHVC"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FiInstagram size="25" color="#000" />
              </S.SocialLink>
            </S.SocialItem>
          </S.SocialList>
        </S.HeroContainer>
      </Container>
    </S.HeroWrapper>
  )
}
