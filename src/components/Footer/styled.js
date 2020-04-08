import styled from 'styled-components'

export const FooterWrapper = styled.footer`
  position: absolute;
  bottom: 0;
  width: 100%;
  z-index: 1;
  margin: 30px 0;
`

export const Footer = styled.div`
  display: flex;
  justify-content: flex-end;
  font-size: 20px;
`

export const Social = styled.div``

export const SocialLink = styled.a`
  margin-right: 18px;
  color: var(--primaryColor);
  transition: 0.3s;

  &:hover {
    color: var(--secondaryColor);
  }
`
