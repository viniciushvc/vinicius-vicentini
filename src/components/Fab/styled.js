import styled from 'styled-components'

import { css } from 'styled-components'

const link = css`
  padding: 10px 11px;
  border-radius: 100%;
  background-color: ${props => props.background || 'var(--primaryColor)'};
  transition: 0.5s;
  outline: 0;
`

export const FabLink = styled.a`
  ${link}

  border: 1.5px solid #000;

  &:hover {
    border: 1.5px solid #fff;
  }
`

export const FabButton = styled.button`
  ${link}
  cursor: pointer;
  border: none;
`
