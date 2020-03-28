import React from 'react'

import { Container, Fab } from '../'

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

          <S.Title>
            Vinicius Vicentini
            <small>Desenvolvedor Front End</small>
          </S.Title>

          <S.SocialList>
            <S.SocialItem>
              <Fab
                href="https://github.com/viniciushvc"
                icon={FiGithub}
                color="#fff"
                background="#181717"
              />
            </S.SocialItem>

            <S.SocialItem>
              <Fab
                href="https://www.linkedin.com/in/viniciushvc/"
                icon={FiLinkedin}
                color="#fff"
                background="#0077B5"
              />
            </S.SocialItem>

            <S.SocialItem>
              <Fab
                href="https://twitter.com/ViniciusHVC"
                icon={FiTwitter}
                color="#fff"
                background="#1DA1F2"
              />
            </S.SocialItem>

            <Fab
              href="https://www.instagram.com/viniciusHVC"
              icon={FiInstagram}
              color="#fff"
              background="#E4405F"
            />
          </S.SocialList>
        </S.HeroContainer>
      </Container>
    </S.HeroWrapper>
  )
}
