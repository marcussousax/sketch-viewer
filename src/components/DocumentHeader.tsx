import React from 'react'
import styled from 'styled-components'
import SketchLogo from '../assets/sketch-logo.svg'
import Separator from '../assets/separator.svg'
import { Link } from 'react-router-dom'

const DocumentHeader = ({ documentTitle }: { documentTitle: string | undefined }) => {
  return (
    <Header>
      <Link to={'/'}>
        <img alt='Sketch Logo' src={SketchLogo} />
      </Link>
      <img src={Separator} height={30} />
      <h2>{documentTitle}</h2>
    </Header>
  )
}

const Header = styled.header`
  display: flex;
  align-items: center;
  box-shadow: 0 0.2rem 0.5rem var(--gray-200);
  padding: 2rem;
  gap: 1.5rem;
  background-color: var(--white);

  a {
    display: inherit;
  }

  h2 {
    margin: 0;
    font-size: 1.4rem;
    font-weight: 400;
  }
`

export default DocumentHeader
