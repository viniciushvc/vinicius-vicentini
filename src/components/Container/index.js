import React from 'react'

import * as S from './styled'

export default ({ maxWidth, children }) => {
  return <S.ContainerWrapper maxWidth={maxWidth}>{children}</S.ContainerWrapper>
}
