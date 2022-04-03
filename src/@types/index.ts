type Thumbnails = {
  url: string
  height: string
  width: string
}

type Files = {
  url: string
  height: number | null
  width: number | null
  scale: number | null
  thumbnails: Thumbnails[]
}

export type Entries = {
  name: string
  isArtboard: boolean
  files: Files[]
}

type Artboards = {
  entries: Entries[]
}

export interface IDocumentProps {
  name: string
  artboards: Artboards
}

export interface IArtboardProps {
  name: string
  src: string
}
