import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import SketchLogo from '../assets/sketch-logo.svg'

const HomePage = () => {
  // I've chosen to create this mocked structure just to simulate
  // a response for another service that fetch documents
  const DOCUMENTS = [
    {
      id: 'e981971c-ff57-46dc-a932-a60dc1804992',
      name: 'Document 1',
    },
    {
      id: '40432a93-5434-4059-87b9-545fd1ad6ee0',
      name: 'Document 2',
    },
  ]

  return (
    <HomeContainer>
      <header>
        <img alt='Sketch Logo' src={SketchLogo} />
        <h1>Sketch Viewer</h1>
      </header>
      <ul>
        {DOCUMENTS.map((doc, index) => (
          <li key={index}>
            <Link to={doc.id}>{doc.name}</Link>
          </li>
        ))}
      </ul>
    </HomeContainer>
  )
}

const HomeContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 5rem;
  padding: 3rem;

  header {
    display: flex;
    align-items: center;
    gap: 1rem;

    img {
      height: 5rem;
    }
  }

  ul {
    list-style: none;
    padding-left: 0;

    display: flex;
    flex-direction: column;
    gap: 5rem;

    @media (min-width: 25rem) {
      flex-direction: row;
    }
  }

  a {
    background: var(--button-bg-color);
    color: #fff;
    padding: 1.5rem;
    border-radius: 0.5rem;
    text-shadow: 0 0.1rem var(--button-text-shadow);
    font-size: 1.3rem;
    text-decoration: none;
    text-transform: uppercase;
    position: relative;
    white-space: nowrap;

    &::before {
      content: ' ';
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      border-radius: 0.5rem;
      box-shadow: 0 0.1rem 5rem 0 rgba(0, 0, 0, 0.2);
      border: 0.2rem solid var(--button-border-color);
      opacity: 0;
      transition: opacity 500ms;
    }

    &:hover::before {
      opacity: 1;
    }
  }
`

export default HomePage
