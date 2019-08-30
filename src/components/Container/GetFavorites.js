import React from 'react'
import { Query } from 'react-apollo'
import { gql } from 'apollo-boost'

import { Loading } from '../helpers/Loading'
import { ErrorMessage } from '../helpers/ErrorMessage'
import { ListOfFavs } from '../ListOfFavs'

const GET_FAVS = gql`
    query getFavs {
    favs {
      id
      categoryId
      src
      likes
      userId
    }
  }
`

const renderProp = ({ loading, error, data }) => {
  if (loading) return <Loading />
  if (error) return <ErrorMessage error={error.message} />
  const { favs } = data

  return <ListOfFavs favs={favs} />
}

export const FavsWithQuery = () => (
  <Query query={GET_FAVS} fetchPolicy='network-only'>
    {renderProp}
  </Query>
)
