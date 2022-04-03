import styled, { createGlobalStyle } from 'styled-components'

export const AppWrapper = styled.div`
  @import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600&display=swap');

  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
`

export const Spacer = styled.span<{ flex?: number }>`
  flex: ${({ flex }) => (flex ? flex : 1)};
`

export const GlobalStyle = createGlobalStyle` 
  :root {
    --button-bg-color: #f8ad03;
    --button-border-color: #ea6c00;
    --button-text-shadow: #ea6c00;
    --gray-100: #f9f9f9;
    --gray-200: #e5e5e5;
    --gray-300: #666;
    --white: #fff;

    --loading-spinner-bg: #f8ad03;
  }

  html {
    font-size: 62.5%;
  }

  body {
    font-family: 'Open Sans', sans-serif;
    margin: 0;
    font-size: 1.3rem;
  }

  #root {
    display: flex;
  }
`
