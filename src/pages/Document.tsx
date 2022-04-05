import React from 'react'
import { Link, useParams } from 'react-router-dom'
import styled from 'styled-components'
import { createUrl, useDocument } from '../hooks'
import Figure from '../components/Figure'
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
        <ul data-testid='artboards-grid'>
          {document?.artboards?.entries.map((artboard, index) => {
            const url = createUrl('name', artboard.name, 'artboard')

            return (
              <li key={index}>
                <Link to={url} data-testid={`artboard-link-${index}`}>
                  <Figure
                    name={artboard.name}
                    src={artboard.files[0].thumbnails[0].url}
                    figCaption={artboard.name}
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

    a {
      text-decoration: none;
    }
  }
`

export default DocumentPage
