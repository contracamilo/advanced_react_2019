import React, { Fragment } from 'react'
import { ListOfCategories } from '../components/ListOfCategories'
import { ListOfPhotoCards } from '../components/Container/ListOfPhotoCard'
import { Helmet } from 'react-helmet'

const HomePage = ({ categoryId }) => {
  return (
    <Fragment>
      <Helmet>
        <title>Cami Gram - Pretty Animals in your phone</title>
        <meta
          name='description'
          content='Here, you can find all your favoriter animal'
        />
      </Helmet>
      <ListOfCategories />
      <ListOfPhotoCards categoryId={categoryId} />
    </Fragment>
  )
}

export const Home = React.memo(HomePage, (prevProps, props) => {
  return prevProps.categoryId === props.categoryId
})
