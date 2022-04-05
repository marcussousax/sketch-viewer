import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import SketchLogo from '../assets/sketch-logo.svg'

const NotFoundPage = ({ summary, details }: { summary?: string; details?: string }) => (
  <NotFoundContainer>
    <header>
      <img alt='Sketch Logo' src={SketchLogo} />
      <h1>Sketch Viewer</h1>
    </header>
    <h3>Page not found!</h3>
    {(summary || details) && (
      <div className='error-message'>
        {summary && !details ? (
          <p>{summary}</p>
        ) : (
          <details>
            <summary>{summary}</summary>
            {details && <p>{details}</p>}
          </details>
        )}
      </div>
    )}
    <Link to='/'>Back to Homepage</Link>
  </NotFoundContainer>
)

const NotFoundContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex: 1;

  header {
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 1rem;
    color: var(--gray-400);
    font-size: 1rem;

    img {
      height: 5rem;
    }
  }

  .error-message {
    background-color: var(--red-100);
    padding: 0.5rem;
    border-radius: 0.4rem;
    color: #fff;
    margin-bottom: 2rem;
    p {
      margin: 0;
    }
  }
`

export default NotFoundPage
