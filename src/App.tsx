import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { GlobalStyle, AppWrapper } from './App.styled'
import HomePage from './pages/Home'
import DocumentPage from './pages/Document'
import ArtboardPage from './pages/Artboard'
import NotFound from './pages/NotFound'

function App() {
  return (
    <AppWrapper>
      <GlobalStyle />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/:documentId' element={<DocumentPage />} />
        <Route path='/:documentId/artboard' element={<ArtboardPage />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </AppWrapper>
  )
}

export default App
