import styled from 'styled-components'

import { Link } from 'gatsby'

export const HeaderWrapper = styled.header`
  background-color: #000;
  padding: 20px 1.3rem;
  position: sticky;
  top: 0;
  z-index: 1;

  .main {
    display: flex;
    justify-content: space-between;
  }

  .name {
    font-weight: 700;
    font-size: 25px;
  }

  .links {
    ul {
      li {
        display: inline-block;

        &:not(:last-child) {
          padding-right: 20px;
        }
      }
    }
  }
`

export const HeaderLink = styled(Link)`
  color: #fff;

  &:hover {
    color: $primary;
  }
`
