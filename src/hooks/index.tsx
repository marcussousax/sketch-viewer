import React from 'react'
import { gql, useQuery } from '@apollo/client'
import { useLocation } from 'react-router-dom'

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
    return (
      data && {
        document: data.share.version.document,
        artboardsCount: data.share.version.document.artboards.entries.length,
      }
    )
  }, [data])

  return {
    documentData: dataResponse?.document,
    documentArtboardsCount: dataResponse?.artboardsCount,
    documentLoading: loading,
    documentError: error,
  }
}

export function useSearchParams() {
  return new URLSearchParams(useLocation().search)
}
