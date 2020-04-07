import styled from 'styled-components'

import { Link } from 'gatsby'

import { css } from 'styled-components'

const link = css`
  color: ${props => props.color || '#fff'};
  transition: 0.2s;
  outline: 0;

  &:hover {
    color: $primary;
  }
`

export const HeaderWrapper = styled.header`
  position: absolute;
  top: 0;
  width: 100%;
  padding: 20px 0;
  z-index: 1;
`

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const HeaderBrand = styled(Link)`
  ${link}

  font-size: 20px;
  font-weight: 800;
`

export const HeaderLinks = styled.div``

export const HeaderList = styled.ul``

export const HeaderItem = styled.li`
  display: inline-block;

  &:not(:last-child) {
    padding-right: 20px;
  }
`

export const HeaderLink = styled(Link)`
  ${link}

  &:hover, &.active {
    border-bottom: 2px solid currentColor;
  }
`
