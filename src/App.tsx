import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { GlobalStyle, AppWrapper } from './App.styled'
import Home from './pages/Home'

function App() {
  return (
    <AppWrapper>
      <GlobalStyle />
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </AppWrapper>
  )
}

export default App
