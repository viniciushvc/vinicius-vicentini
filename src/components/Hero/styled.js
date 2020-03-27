import styled from 'styled-components'

export const HeroWrapper = styled.section`
  background-color: #0f2d44;
  padding: 100px 0;
`

export const HeroContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const ImageWrapper = styled.div`
  padding: 5px;
  border-radius: 100%;
  border: 4px solid tomato;
  width: 150px;
`

export const Image = styled.img`
  border-radius: 100%;
  background-size: cover;
  height: 150px;
`

export const SocialList = styled.ul`
  margin-top: 20px;
`

export const SocialItem = styled.li`
  display: inline-block;

  &:not(:last-child) {
    margin-right: 20px;
  }
`

export const SocialLink = styled.a`
  padding: 12px 13px;
  border-radius: 100%;
  background-color: ${props => props.bg || '#fff'};
`
