import React from 'react'

import * as S from './styled'

export default function({ items }) {
  return (
    <S.PortfolioWrapper>
      <h2 className="black">Github</h2>

      <S.PortfolioList>
        {items?.map(item => (
          <S.PortfolioLink
            key={item}
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            <S.Portfolio>
              <S.PortfolioTitle>{item.name}</S.PortfolioTitle>
            </S.Portfolio>
          </S.PortfolioLink>
        ))}
      </S.PortfolioList>
    </S.PortfolioWrapper>
  )
}
