import styled from 'styled-components'

import { Link } from 'gatsby'

export const PostsWrapper = styled.div`
  padding: 10px 15px;
  width: 100%;
  display: flex;
`

export const Post = styled.div`
  padding: 10px;
`

export const PostLink = styled(Link)`
  color: #fff;
  padding: 1.5rem;
  margin-bottom: 1rem;
  border-radius: 0.5rem;
  background-color: #000;
`

export const PostTitle = styled.h2`
  margin-bottom: 5px;
  font-size: 25px;
  font-weight: bold;
`

export const PostDate = styled.p`
  margin-bottom: 5px;
`
