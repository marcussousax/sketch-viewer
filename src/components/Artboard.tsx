import React from 'react'
import styled from 'styled-components'
import { IArtboardProps } from '../@types'

const Artboard = ({ name, src }: IArtboardProps) => {
  return (
    <Figure>
      <img src={src} alt={name} />
      <figcaption>{name}</figcaption>
    </Figure>
  )
}

const Figure = styled.figure`
  margin: 0;
  text-align: center;
  img {
    width: 100%;
  }

  figcaption {
    color: var(--gray-300);
    padding: 1rem;
  }
`

export default Artboard
