import styled from 'styled-components'

export const PostImage = styled.div`
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),
    url(${props => props.src}) no-repeat;
  height: 70vh;
  background-position: center;
  background-size: cover;

  @media (max-width: 720px) {
    height: 50vh;
    padding: 20px;
  }
`

export const PostWrapper = styled.div`
  margin-top: -140px;
  background-color: #0f2d44;
  padding: 50px;

  @media (max-width: 720px) {
    margin-top: 0;
    background-color: #0d2538;
    padding: 50px 0;
  }
`

export const PostTitle = styled.h1`
  font-size: 50px;
  font-weight: 900;

  @media (max-width: 720px) {
    font-size: 30px;
    font-weight: 900;
  }
`

export const PostDate = styled.p`
  margin-bottom: 10px;
`

export const PostContent = styled.div`
  margin: 40px 0;
`
