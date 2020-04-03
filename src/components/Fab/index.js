import React from 'react'

import * as S from './styled'

export default ({ href, background, color, icon: Icon }) => {
  return (
    <S.FabLink
      href={href}
      background={background}
      target="_blank"
      rel="noopener noreferrer"
    >
      <Icon size={20} color={color} />
    </S.FabLink>
  )
}
