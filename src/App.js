import React from 'react'
import { ListOfCategories } from './components/ListOfCategories'
import { GlobalStyle } from './GlobalStyles'
import { ListOfPhotoCards } from './components/ListOfPhotoCards'

export const App = () => {
  return (
    <div data-test={'component-app'}>
      <GlobalStyle />
      <h1>Hello</h1>
      <ListOfCategories />
      <ListOfPhotoCards />
    </div>
  )
}
