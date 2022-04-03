import React from 'react'
import { Link, useParams } from 'react-router-dom'
import styled from 'styled-components'
import { useDocument } from '../hooks'
import Artboard from '../components/Artboard'
import DocumentHeader from '../components/DocumentHeader'
import LoadingSpinner from '../components/LoadingSpinner'
import { IDocumentProps } from '../@types'

const DocumentPage = () => {
  const { documentId } = useParams()
  const { documentData, documentLoading, documentError } = useDocument(documentId)

  const [document, setDocument] = React.useState<IDocumentProps>()

  React.useEffect(() => {
    if (documentData) {
      setDocument(documentData)
    }
  }, [documentData])

  if (documentLoading) return <LoadingSpinner />
  if (documentError) return <p>Request error: ${documentError}</p>

  return (
    <DocumentContainer>
      <DocumentHeader documentTitle={document?.name} />
      <DocumentContent>
        <ul>
          {document?.artboards?.entries.map((artboard, index) => {
            const url = new URL(location.href)
            url.pathname = `${url.pathname}/artboard`
            // In the future it could be easier to handle the URL parsing & manipulation
            // without dealing with strings concatenation, adding something like versioning for example
            // url.searchParams.set('version', artboard.version)
            url.searchParams.set('name', artboard.name)
            url.toString()

            return (
              <li key={index}>
                <Link to={url}>
                  <Artboard
                    name={artboard.name}
                    src={artboard.files[0].thumbnails[0].url}
                  />
                </Link>
              </li>
            )
          })}
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

    display: grid;
    grid-gap: 5rem;
    grid-template-columns: repeat(auto-fit, minmax(25rem, 1fr));
    grid-auto-flow: row dense;

    li {
      flex: 0 1 15%;
    }
  }
`

export default DocumentPage
