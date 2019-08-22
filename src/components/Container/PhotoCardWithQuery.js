import React from 'react'
import { PhotoCard } from '../PhotoCard'
import { gql } from 'apollo-boost'
import { Query } from 'react-apollo'
import { Loading } from '../helpers/Loading'
import { ErrorMessage } from '../helpers/ErrorMessage'

const GET_SINGLE_PHOTO = gql`
    query getSinglePhoto($id: ID!) {
        photo(id: $id) {
        id
        categoryId
        src
        likes
        userId
        liked
        }
    }
`
/**
 * Render Props function receives all the data to render as props.
 * @function renderCard
 * @param loading loading state of the query
 * @param error all the error response
 * @param data all the data for the single card
 * @returns {JSX.Element} Component to render
 */
const renderCard = ({ loading, error, data }) => {
  const { photo = {} } = data

  if (error) return <ErrorMessage {...error} />
  if (loading) return <Loading />
  return <PhotoCard {...photo} />
}

/**
 * High order Component to show the detail of a card selected/clicked.
 * @function PhotoCardWithQuery
 * @param {object} id the id of reference of the selected/clicked card
 * @returns {renderCard}  function
 */
export const PhotoCardWithQuery = ({ id }) => (
  <Query query={GET_SINGLE_PHOTO} variables={{ id }}>
    {renderCard}
  </Query>
)
