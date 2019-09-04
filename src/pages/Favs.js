import React from 'react'
import { FavsWithQuery } from '../components/Container/GetFavorites'
import { Layout } from '../components/Layout'

export default () => (
  <Layout title='Tus favoritos' subtitle='Aquí puedes encontrar tus favoritos'>
    <FavsWithQuery />
  </Layout>
)
