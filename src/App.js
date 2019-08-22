import React from 'react'
import { ListOfCategories } from './components/ListOfCategories'
import { GlobalStyle } from './components/styles/globalStyles'
import { ListOfPhotoCards } from './components/Container/ListOfPhotoCard'
import { Logo } from './components/Logo'
import { PhotoCardWithQuery } from './components/Container/PhotoCardWithQuery'

export const App = () => {
  const urlParams = new window.URLSearchParams(window.location.search)
  const detailId = urlParams.get('detail')
  return (
    <div data-test={'component-app'}>
      <GlobalStyle />
      <Logo />
      {
        detailId
          ? <PhotoCardWithQuery id={detailId} />
          : <React.Fragment>
            <ListOfCategories />
            <ListOfPhotoCards categoryId={2} />
          </React.Fragment>
      }

    </div>
  )
}

export default App
