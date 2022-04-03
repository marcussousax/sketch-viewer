import React from 'react'
import { gql, useQuery } from '@apollo/client'

const FETCH_DOCUMENT = gql`
  query FetchDocument($documentId: String!) {
    share(id: $documentId) {
      identifier
      version {
        document {
          name
          artboards {
            entries {
              name
              isArtboard
              files {
                url
                height
                width
                scale
                thumbnails {
                  url
                  height
                  width
                }
              }
            }
          }
        }
      }
    }
  }
`

export function useDocument(documentId?: string) {
  const { data, loading, error } = useQuery(FETCH_DOCUMENT, {
    fetchPolicy: 'cache-first',
    variables: {
      documentId,
    },
  })

  const dataResponse = React.useMemo(() => {
    return data && data.share.version.document
  }, [data])

  return {
    documentData: dataResponse,
    documentLoading: loading,
    documentError: error,
  }
}
