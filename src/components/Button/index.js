import React from 'react'

import * as S from './styled'

export default function({ to, children }) {
  return (
    <S.ButtonWrapper>
      <S.Button to={to}>{children}</S.Button>
    </S.ButtonWrapper>
  )
}
