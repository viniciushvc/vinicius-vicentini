import styled from 'styled-components'

import { Link } from 'gatsby'

import { animations } from './animations'

export const Wrapper = styled.section`
  height: calc(100vh);
  background-image: linear-gradient(
    to right bottom,
    #6e366f,
    #6c3875,
    #6a3b7c,
    #673d82,
    #634089,
    #5e4088,
    #593f87,
    #543f86,
    #4e3c7d,
    #493874,
    #43346b,
    #3e3162
  );

  ${animations}

  html {
    overflow: hidden !important;
  }
`

export const Space = styled.div`
  background: url(http://salehriaz.com/404Page/img/overlay_stars.svg);
  background-repeat: repeat;
  background-position: center;
  width: 100%;
  height: 100vh;
`

export const Rocket = styled.img`
  position: absolute;
  transform: translateX(-50px);
  top: 75%;
  animation: rocket 3s linear infinite both running;
  width: 40px;
`

export const Earth = styled.img`
  position: absolute;
  top: 20%;
  left: 15%;
  animation: earth 150s infinite linear both;
  width: 100px;
`

export const Moon = styled.img`
  position: absolute;
  top: 12%;
  left: 25%;
  transform: rotate(0deg);
  transition: transform ease-in 0.5s;
  width: 80px;
`

export const AstronautBox = styled.div`
  position: absolute;
  top: 60%;
  right: 20%;
  will-change: transform;
  animation: move-astronaut 50s infinite linear both alternate;

  @media (max-width: 600px) {
    top: 80%;
  }
`

export const Astronaut = styled.img`
  position: absolute;
  top: 60%;
  right: 20%;
  will-change: transform;
  animation: rotate-astronaut 200s infinite linear both alternate;
  width: 140px;
`

export const Content = styled.div`
  justify-content: center;
  align-items: center;
  flex-direction: column;
  display: flex;
  width: 100%;
  height: 100vh;
  z-index: 1;

  h1 {
    font-size: 150px;
    font-weight: 800;
    color: #fff;
  }

  p {
    font-size: 20px;
    margin-bottom: 20px;
    color: #fff;
  }
`

export const Button = styled(Link)`
  padding: 10px 15px;
  border: 1px solid #ffcb39;
  border-radius: 100px;
  font-weight: 500;
  color: #fff;
  text-align: center;
  transition: 0.3s;

  &:hover {
    background-color: #ffcb39;
    color: #222;
  }
`
