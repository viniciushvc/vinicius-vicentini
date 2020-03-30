import React, { useState, useEffect } from 'react'

import { FiSun, FiMoon } from 'react-icons/fi'

import { Fab } from '../'

import * as S from './styled'

export default function() {
  const [theme, setTheme] = useState()

  const isDark = theme === 'dark'

  useEffect(() => {
    setTheme(window.__theme)

    window.__onThemeChange = () => setTheme(window.__theme)
  }, [])

  return (
    <S.ThemeWrapper>
      <Fab
        icon={isDark ? FiSun : FiMoon}
        color={isDark ? '#333' : '#fff'}
        onClick={() => {
          window.__setPreferredTheme(isDark ? 'light' : 'dark')
        }}
      />
    </S.ThemeWrapper>
  )
}
