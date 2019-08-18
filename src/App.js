import React from 'react'
import { ListOfCategories } from './components/ListOfCategories'
import { GlobalStyle } from './GlobalStyles'

const App = () => {
  return (
    <React.Fragment>
      <GlobalStyle />
      <h1>Hello</h1>
      <ListOfCategories />
    </React.Fragment>
  )
}

export default App
