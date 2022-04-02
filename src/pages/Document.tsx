import React from 'react'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'
import DocumentHeader from '../components/DocumentHeader'
import LoadingSpinner from '../components/LoadingSpinner'

const Document = () => {
  const { documentId } = useParams()
  const [loading, setLoading] = React.useState(true)

  React.useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 1000)
  }, [])

  return (
    <DocumentContainer>
      <DocumentHeader documentTitle='[Document Name]' />
      <DocumentContent>
        {loading ? <LoadingSpinner /> : documentId}
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
`

export default Document
