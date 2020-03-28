import styled from 'styled-components'

export const Fab = styled.a`
  padding: 10px 11px;
  border-radius: 100%;
  background-color: ${props => props.background || '#fff'};
  transition: 0.5s;
  border: 1.5px solid #000;

  &:hover {
    border: 1.5px solid #fff;
  }
`
