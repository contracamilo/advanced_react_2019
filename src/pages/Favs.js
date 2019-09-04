import React from 'react'
import { FavsWithQuery } from '../components/Container/GetFavorites'
import { Layout } from '../components/Layout'

export const Favs = () => (

  <Layout
    title={'Favorites'}
    subtitle={'that liked pictures'}
  >
    <FavsWithQuery />
  </Layout>

)
