import styled from 'styled-components'

import { Link } from 'gatsby'

import { css } from 'styled-components'

const link = css`
  color: #fff;

  &:hover {
    color: $primary;
  }
`

export const HeaderWrapper = styled.header`
  padding: 20px 0;
  z-index: 1;
`

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
`

export const HeaderBrand = styled(Link)`
  ${link}
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
`
