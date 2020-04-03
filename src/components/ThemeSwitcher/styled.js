import styled from 'styled-components'

export const ThemeWrapper = styled.div``

export const ThemeButton = styled.button`
  background-color: transparent;
  border: none;
  color: ${props => props.color || '#fff'};
  font-size: 15px;
  outline: 0;
  cursor: pointer;
`
