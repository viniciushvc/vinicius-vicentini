import styled from 'styled-components'

export const PortfolioWrapper = styled.div``

export const PortfolioList = styled.article`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-auto-rows: auto;
  grid-gap: 1rem;
  margin: 50px 0;
`

export const PortfolioLink = styled.a`
  margin-bottom: 1rem;
  border-radius: 0.5rem;
`

export const Portfolio = styled.div`
  border-radius: 5px;
  background-color: var(--secondaryBackground);
  padding: 20px;
  color: var(--primaryColor);
  height: 150px;
`

export const PortfolioTitle = styled.h2`
  margin-bottom: 5px;
  font-size: 30px;
  font-weight: bold;
`
