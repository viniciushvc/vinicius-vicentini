import styled from 'styled-components'

export const FabLink = styled.a`
  padding: 10px 11px;
  border-radius: 100%;
  background-color: ${props => props.background || 'var(--primaryColor)'};
  transition: 0.5s;
  display: inline-block;
  margin-bottom: 2px;
  outline: 0;
  border: 1.5px solid #000;

  &:hover {
    border: 1.5px solid #fff;
  }
`
