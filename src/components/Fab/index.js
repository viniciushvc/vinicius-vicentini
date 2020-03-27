import React from 'react'

import * as S from './styled'

export default ({ href, background, hover, color, icon: Icon }) => {
  return (
    <S.Fab
      href={href}
      background={background}
      hover={hover}
      target="_blank"
      rel="noopener noreferrer"
    >
      <Icon size={25} color={color} />
    </S.Fab>
  )
}
