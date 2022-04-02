import React from 'react'
import { GlobalStyle, AppWrapper } from './App.styled'
import Home from './pages/Home'

function App() {
  return (
    <AppWrapper>
      <GlobalStyle />
      <Home />
    </AppWrapper>
  )
}

export default App
