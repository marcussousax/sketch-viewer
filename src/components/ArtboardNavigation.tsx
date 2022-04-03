import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useArtboard, useDocument, useSearchParams } from '../hooks'
import ArrowLeft from '../assets/arrow-left.svg'
import ArrowRight from '../assets/arrow-right.svg'
import styled from 'styled-components'

const Navigation = () => {
  const { documentId } = useParams()
  const query = useSearchParams()
  const name = query.get('name')

  const { documentData, documentArtboardsCount } = useDocument(documentId)

  const { artboardPosition } = useArtboard(documentId, name!)

  let currentIdx = artboardPosition

  function next() {
    move()
  }

  function previous() {
    move(false)
  }

  function move(next = true) {
    currentIdx =
      (currentIdx + (next ? 1 : -1) + documentArtboardsCount) % documentArtboardsCount

    const url = new URL(location.href)
    url.pathname = `${url.pathname}`
    url.searchParams.set('name', documentData.artboards.entries[currentIdx].name)
    url.toString()

    navigate(url)
  }

  const navigate = useNavigate()

  return (
    <NavigationContainer>
      <Button onClick={() => previous()} disabled={currentIdx + 1 === 1}>
        <img src={ArrowLeft} alt='Previous artboard' />
      </Button>
      {currentIdx + 1} / {documentArtboardsCount}
      <Button onClick={() => next()} disabled={currentIdx + 1 === documentArtboardsCount}>
        <img src={ArrowRight} alt='Next artboard' />
      </Button>
    </NavigationContainer>
  )
}

const NavigationContainer = styled.div`
  display: flex;
  align-items: center;
  color: var(--gray-400);
  font-size: 1.4rem;
  gap: 1rem;
`

const Button = styled.button`
  border: none;
  background: transparent;
  cursor: pointer;
  display: inherit;
  &:disabled {
    opacity: 0.3;
  }
`

export default Navigation
