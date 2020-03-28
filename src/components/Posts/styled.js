import styled from 'styled-components'

import { Link } from 'gatsby'

export const PostsWrapper = styled.article`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-auto-rows: auto;
  grid-gap: 1rem;
  margin: 50px 0;
`

export const PostLink = styled(Link)`
  margin-bottom: 1rem;
  border-radius: 0.5rem;
`

export const Post = styled.div`
  border-radius: 5px;
  background-color: #0f2d44;
  padding: 20px;
  color: #fff;
  height: 150px;
`

export const PostTitle = styled.h2`
  margin-bottom: 5px;
  font-size: 30px;
  font-weight: bold;
`
