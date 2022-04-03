import React from 'react'
import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router'

import App from '../App'

describe('Homepage', () => {
  it('it should show the logo and buttons', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <App />
      </MemoryRouter>
    )

    expect(screen.getByText('Sketch Viewer')).toBeInTheDocument()
    expect(screen.getByText('Code test')).toBeInTheDocument()
    expect(screen.getByText('Code test (bonus)')).toBeInTheDocument()
  })
})
