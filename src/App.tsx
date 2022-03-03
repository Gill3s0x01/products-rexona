import React from 'react'
import RoutesApp from './routes'
import { BrowserRouter } from 'react-router-dom'
import { GlobalStyle } from './styles/global'

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <RoutesApp />
    </BrowserRouter>
  )
}

export default App
