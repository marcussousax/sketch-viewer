import React from 'react'
import styled from 'styled-components'
import { IArtboardProps } from '../@types'

const Artboard = ({ name, src }: IArtboardProps) => {
  return (
    <Figure>
      <div className='image-holder'>
        <img loading='lazy' decoding='async' src={src} alt={name} />
      </div>
      <figcaption>{name}</figcaption>
    </Figure>
  )
}

const Figure = styled.figure`
  margin: 0;
  text-align: center;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  .image-holder {
    display: flex;
    align-items: center;
    flex: 1;
  }

  img {
    max-width: 80%;
    margin: 0 auto;
  }

  figcaption {
    color: var(--gray-300);
    padding: 1rem;
  }
`

export default Artboard
