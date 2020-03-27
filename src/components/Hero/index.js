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

          <S.SocialList>
            <S.SocialItem>
              <Fab
                href="https://github.com/viniciushvc"
                icon={FiGithub}
                color="#000"
              />
            </S.SocialItem>

            <S.SocialItem>
              <Fab
                href="https://www.linkedin.com/in/viniciushvc/"
                icon={FiLinkedin}
                color="#000"
              />
            </S.SocialItem>

            <S.SocialItem>
              <Fab
                href="https://twitter.com/ViniciusHVC"
                icon={FiTwitter}
                color="#000"
              />
            </S.SocialItem>

            <Fab
              href="https://www.instagram.com/viniciusHVC"
              icon={FiInstagram}
              color="#000"
            />
          </S.SocialList>
        </S.HeroContainer>
      </Container>
    </S.HeroWrapper>
  )
}
