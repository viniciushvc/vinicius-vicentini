import styled from 'styled-components'

import { Link } from 'gatsby'

export const ButtonWrapper = styled.div`
  text-align: ${props => props.align || 'left'};
`

export const Button = styled(Link)`
  padding: 10px 40px;
  background-color: ${props => props.color || 'var(--inverseBackground)'};
  border: 1px solid ${props => props.color || 'var(--inverseBackground)'};
  color: ${props => props.color || 'var(--inverseColor)'};
  font-size: ${props => props.size || '20px'};
  text-align: center;
  border-radius: 4px;
  transition: ease 0.3s;

  &:hover {
    background-color: transparent;
    color: ${props => props.color || 'var(--primaryColor)'};
  }
`
