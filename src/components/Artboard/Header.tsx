import React from 'react'
import styled from 'styled-components'
import Close from '../../assets/close.svg'
import Separator from '../../assets/separator.svg'
import { Link, useParams } from 'react-router-dom'
import { Spacer } from '../../App.styled'
import Navigation from './Navigation'

const ArtboardHeader = ({ title }: { title: string | undefined }) => {
  const { documentId } = useParams()

  return (
    <Header>
      <Link to={`/${documentId!}`}>
        <img alt='Close artboard' src={Close} />
      </Link>
      <img src={Separator} height={30} />
      <Navigation />
      <Spacer flex={2} />
      <h2>{title}</h2>
      <Spacer flex={2} />
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
  position: sticky;
  top: 0;

  a {
    display: inherit;
  }

  h2 {
    margin: 0;
    font-size: 1.4rem;
    font-weight: 400;
    flex: 1;
  }
`

export default ArtboardHeader
