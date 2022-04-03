import React from 'react'
import styled from 'styled-components'
import { ErrorBoundary } from 'react-error-boundary'

import { IFigureProps } from '../@types'
import { ErrorFallback } from './ErrorFalback'

const Figure = ({ name, src, figCaption, width, height }: IFigureProps) => {
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <FigureContainer>
        <div className='image-holder'>
          <img
            loading='lazy'
            decoding='async'
            width={width || 'auto'}
            height={height || 'auto'}
            src={src}
            alt={`${name} figure`}
          />
        </div>
        {figCaption && <figcaption>{figCaption}</figcaption>}
      </FigureContainer>
    </ErrorBoundary>
  )
}

const FigureContainer = styled.figure`
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
    /* max-width: 80%;
    height: auto;
    margin: 0 auto; */

    max-width: 80%;

    margin: 0 auto;
    object-fit: contain;
    max-height: calc(100vh - 15rem);
  }

  figcaption {
    color: var(--gray-300);
    padding: 1rem;
  }
`

export default Figure
