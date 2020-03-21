import React from 'react'

import * as S from './styled'

export default () => {
  return (
    <S.HeaderWrapper>
      <div className="main">
        <S.HeaderLink to="/">Vicentini Vicentini</S.HeaderLink>

        <div className="links">
          <ul>
            <li></li>

            <li>
              <S.HeaderLink to="/about">Sobre</S.HeaderLink>
            </li>
          </ul>
        </div>
      </div>
    </S.HeaderWrapper>
  )
}
