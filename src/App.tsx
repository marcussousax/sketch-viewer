import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { GlobalStyle, AppWrapper } from './App.styled'
import HomePage from './pages/Home'
import DocumentPage from './pages/Document'

function App() {
  return (
    <AppWrapper>
      <GlobalStyle />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/:documentId' element={<DocumentPage />} />
      </Routes>
    </AppWrapper>
  )
}

export default App
