import styled from 'styled-components'

export const HeroWrapper = styled.section`
  padding: 200px 0 30px 0;
  background-color: ${props => props.background || '#ffdd18'};
  margin-bottom: 50px;
`

export const HeroTitle = styled.h1`
  font-size: 70px;
  color: ${props => props.color || '#222'};
  font-weight: 700;
`
