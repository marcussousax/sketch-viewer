import React from 'react'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'
import Artboard from '../components/Artboard'
import DocumentHeader from '../components/DocumentHeader'
import LoadingSpinner from '../components/LoadingSpinner'

const DocumentPage = () => {
  const { documentId } = useParams()
  const [loading, setLoading] = React.useState(true)

  React.useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 1000)
  }, [])

  return loading ? (
    <LoadingSpinner />
  ) : (
    <DocumentContainer>
      <DocumentHeader documentTitle='[Document Name]' />
      <DocumentContent>
        <ul>
          <li>
            <Artboard
              name='Artboard name'
              src='https://interactive-examples.mdn.mozilla.net/media/cc0-images/elephant-660-480.jpg'
            />
          </li>
          <li>
            <Artboard
              name='Artboard name'
              src='https://i.picsum.photos/id/379/300/500.jpg?hmac=2t90XMR2fy94azGlyTL1ZRPWQKhQI1Lw15vhbpdqmYY'
            />
          </li>
          <li>
            <Artboard
              name='Artboard name'
              src='https://i.picsum.photos/id/798/300/400.jpg?hmac=EGI3BSIG6KPw7k2MOtYoER_FzQeCuYr954fI8RCxFVo'
            />
          </li>
          <li>
            <Artboard
              name='Artboard name'
              src='https://i.picsum.photos/id/841/500/300.jpg?hmac=8xtWN0bwiDHoUWKWGrDqGI5mA7PWwGPu14yFDm67Gh0'
            />
          </li>
        </ul>
      </DocumentContent>
    </DocumentContainer>
  )
}

const DocumentContainer = styled.section`
  display: flex;
  flex-direction: column;
  flex: 1;
  background-color: var(--gray-100);
`

const DocumentContent = styled.div`
  flex: 1;
  padding: 2rem;

  ul {
    list-style: none;
    margin: 0;
    padding-left: 0;

    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    gap: 2rem;

    @media (min-width: 25rem) {
      flex-direction: row;
    }

    li {
      flex: 0 1 30%;
    }
  }
`

export default DocumentPage
