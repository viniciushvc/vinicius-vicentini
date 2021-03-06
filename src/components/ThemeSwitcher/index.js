import React, { useState, useEffect } from 'react'

import { FiSun, FiMoon } from 'react-icons/fi'

import * as S from './styled'

export default function({ color }) {
  const [theme, setTheme] = useState()

  const isDark = theme === 'dark'

  useEffect(() => {
    setTheme(window.__theme)

    window.__onThemeChange = () => setTheme(window.__theme)
  }, [])

  function changeTheme() {
    window.__setPreferredTheme(isDark ? 'light' : 'dark')
  }

  return (
    <S.ThemeWrapper>
      <S.ThemeButton color={color} onClick={changeTheme}>
        {isDark ? <FiSun /> : <FiMoon />}
      </S.ThemeButton>
    </S.ThemeWrapper>
  )
}
