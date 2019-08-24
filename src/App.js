import React from 'react'
import { GlobalStyle } from './components/styles/globalStyles'
import { Logo } from './components/Logo'
import { NavBar } from './components/Navbar'

import { Home } from './pages/Home'
import { User } from './pages/User'
import { UnregistedUser } from './pages/UnregisteredUser'
import { Favs } from './pages/Favs'
import { Detail } from './pages/Detail'

import { Router } from '@reach/router'

/**
 * Function that recieve by props is the user was authentcated
 * @function UserLogged
 * @param { isAuth } prop is true if the user is authenticated
 * @returns {children} rendered hi childen
 */
const UserLogged = ({ children }) => {
  return children({ isAuth: true })
}

/**
 * Main component of the app.
 * @function App
 * @returns {Jsx.Element} all the components in the app
 */
export const App = () => {
  return (
    <div>
      <GlobalStyle />
      <Logo />
      <Router>
        <Home path='/' />
        <Home path='/pet/:categoryId' />
        <Detail path='/detail/:detailId' />
      </Router>

      <UserLogged>
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
      </UserLogged>

      <NavBar />
    </div>
  )
}

export default App
