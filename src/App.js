import React, { Fragment } from 'react'
import { GlobalStyle } from './components/styles/globalStyles'
import { Logo } from './components/Logo'
import { NavBar } from './components/Navbar'

import { Home } from './pages/Home'
import { User } from './pages/User'
import { UnregistedUser } from './pages/UnregisteredUser'
import { Favs } from './pages/Favs'
import { Detail } from './pages/Detail'

import { Router } from '@reach/router'
import Context from './Context'

/**
 * Main component of the app.
 * @function App
 * @returns {Jsx.Element} all the components in the app
 */
export const App = () => {
  return (
    <Fragment>
      <GlobalStyle />
      <Logo />
      <Router>
        <Home path='/' />
        <Home path='/pet/:categoryId' />
        <Detail path='/detail/:detailId' />
      </Router>

      <Context.Consumer>
        {
          ({ isAuth }) =>
            isAuth
              ? <Router>
                <Favs path='/favs' />
                <User path='/user' />
              </Router>
              : <Router>
                <UnregistedUser path='/favs' />
                <UnregistedUser path='/user' />
              </Router>
        }
      </Context.Consumer>

      <NavBar />
    </Fragment>
  )
}

export default App
