import React from 'react'

import * as S from './styled'

export default ({ href, background, color, icon: Icon, onClick }) => {
  const Link = (
    <S.FabLink
      href={href}
      background={background}
      target="_blank"
      rel="noopener noreferrer"
    >
      <Icon size={20} color={color} />
    </S.FabLink>
  )

  const Button = (
    <S.FabButton type="button" background={background} onClick={onClick}>
      <Icon size={20} color={color} />
    </S.FabButton>
  )

  return href ? Link : Button
}
