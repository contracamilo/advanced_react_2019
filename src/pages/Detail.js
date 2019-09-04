import React from 'react'
import { PhotoCardWithQuery } from '../components/Container/PhotoCardWithQuery'
import { Layout } from '../components/Layout';

export const Detail = ({ detailId }) => (
  <Layout title={`Photo ${detailId}`} >
    <PhotoCardWithQuery id={detailId} />
  </Layout>
)
