import React, { useContext, Suspense } from 'react'
import { GlobalStyle } from './components/styles/globalStyles'
import { Logo } from './components/Logo'
import { NavBar } from './components/Navbar'

import { Home } from './pages/Home'
import { User } from './pages/User'
import { UnregistedUser } from './pages/UnregisteredUser'
import { Detail } from './pages/Detail'

import { Router, Redirect } from '@reach/router'
import { Context } from './Context'
import { NotFound } from './pages/NotFound'

// lazy loading
const Favs = React.lazy(() => import('./pages/Favs'))

/**
 * Main component of the app.
 * @function App
 * @returns {Jsx.Element} all the components in the app
 */
export const App = () => {
  const { isAuth } = useContext(Context)
  return (
    <Suspense fallback={<div />}>
      <div data-test={'component-app'}>
        <GlobalStyle />
        <Logo />
        <Router>
          <NotFound default />
          <Home path='/' />
          <Home path='/pet/:categoryId' />
          <Detail path='/detail/:detailId' />
          {!isAuth && <UnregistedUser path='/login' />}
          {/* !isAuth && <Redirect from='/favs' to='/login' /> */}
          {!isAuth && <Redirect from='/user' to='/login' />}
          <Favs path='/favs' />
          <User path='/user' />
        </Router>

        <NavBar />
      </div>
    </Suspense>
  )
}

export default App
