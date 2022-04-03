import React from 'react'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'
import ArtboardHeader from '../components/ArtboardHeader'
import LoadingSpinner from '../components/LoadingSpinner'
import { useArtboard, useSearchParams } from '../hooks'

const ArtboardPage = () => {
  const { documentId } = useParams()
  const query = useSearchParams()
  const name = query.get('name')

  const { artboardData, artboardLoading } = useArtboard(
    documentId,
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    name!
  )

  if (!name || !documentId || artboardLoading) return <LoadingSpinner />

  return (
    <ArtboardContainer>
      <ArtboardHeader title={artboardData.name} />

      <ArtboardContent>
        <ul>
          <li>
            <figure>
              <img
                alt=''
                loading='lazy'
                decoding='async'
                src={artboardData.files[0].thumbnails[0].url}
              />
            </figure>
          </li>
        </ul>
      </ArtboardContent>
    </ArtboardContainer>
  )
}

const ArtboardContainer = styled.section`
  display: flex;
  flex-direction: column;
  flex: 1;
  background-color: var(--gray-100);
`

const ArtboardContent = styled.div`
  flex: 1;
  padding: 2rem;

  ul {
    list-style: none;
    margin: 0;
    padding-left: 0;

    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(25rem, 1fr));
    grid-auto-flow: row dense;

    li {
      flex: 0 1 15%;
      text-align: center;
    }
  }
  img {
    max-width: 80%;
    margin: 0 auto;
  }
`

export default ArtboardPage
