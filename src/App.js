import React from 'react'
import { ListOfCategories } from './components/ListOfCategories'
import { GlobalStyle } from './GlobalStyles'
import { ListOfPhotoCards } from './components/ListOfPhotoCards'

const App = () => {
  return (
    <React.Fragment>
      <GlobalStyle />
      <h1>Hello</h1>
      <ListOfCategories />
      <ListOfPhotoCards />
    </React.Fragment>
  )
}

export default App
