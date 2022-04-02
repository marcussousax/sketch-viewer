import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { GlobalStyle, AppWrapper } from './App.styled'
import Home from './pages/Home'
import Document from './pages/Document'

function App() {
  return (
    <AppWrapper>
      <GlobalStyle />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/:documentId' element={<Document />} />
      </Routes>
    </AppWrapper>
  )
}

export default App
