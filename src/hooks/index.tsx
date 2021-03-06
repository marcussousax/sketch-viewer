import React from 'react'
import { ApolloError, gql, useQuery } from '@apollo/client'
import { useLocation } from 'react-router-dom'
import { Artboard, IDocumentProps } from '../@types'

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

export function useDocument(documentId?: string): {
  documentData: IDocumentProps
  documentArtboardsCount: number
  documentLoading: boolean
  documentError: ApolloError | undefined
} {
  const { data, loading, error } = useQuery(FETCH_DOCUMENT, {
    fetchPolicy: 'cache-first',
    variables: {
      documentId,
    },
  })

  const dataResponse = React.useMemo(() => {
    return {
      document: data?.share.version.document,
      artboardsCount: data?.share.version.document.artboards.entries.length,
    }
  }, [data])

  return {
    documentData: dataResponse?.document,
    documentArtboardsCount: dataResponse?.artboardsCount,
    documentLoading: loading,
    documentError: error,
  }
}

export function useArtboard(
  documentId?: string,
  name?: string
): {
  artboardData: Artboard
  artboardPosition: number
  artboardLoading: boolean
  artboardError: string | null
} {
  const { documentData }: { documentData: IDocumentProps } = useDocument(documentId)
  const [loading, setLoading] = React.useState(true)

  const filteredArtboard: Artboard[] = React.useMemo(() => {
    return documentData?.artboards.entries.filter((artboard) => artboard.name === name)
  }, [documentData, name])

  React.useEffect(() => {
    if (filteredArtboard) {
      setLoading(false)
    }
  }, [filteredArtboard])

  return {
    artboardData: filteredArtboard?.[0],
    artboardPosition: documentData?.artboards.entries.findIndex(
      (artboard) => artboard.name === name
    ),
    artboardLoading: loading,
    artboardError: filteredArtboard?.length ? null : "Artboard doesn't exist",
  }
}

export function useSearchParams(): URLSearchParams {
  return new URLSearchParams(useLocation().search)
}

// This isn't a custom hook
// TODO: Accept string[] instead string
export function createUrl(name: string, value: string, pathName?: string): URL {
  const url = new URL(location.href)
  url.pathname = `${url.pathname}${pathName ? `/${pathName}` : ''}`
  url.searchParams.set(name, value)
  url.toString()

  return url
}
