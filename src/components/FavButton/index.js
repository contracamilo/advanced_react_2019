import React from 'react'
import { MdFavoriteBorder, MdFavorite } from 'react-icons/md'
import { Button } from './styles'
import PropTypes from 'prop-types'

/**
 * Functional react component for show a Like button
 * @function FavButton
 * @param {boolean} liked if the picture was liked
 * @param {number} likes number of likes
 * @param {function} onclick function to trigger on click
 * @returns {JSX.Element} rendered button element for each card
 */

export const FavButton = ({ liked, likes, onClick }) => {
  const Icon = liked ? MdFavorite : MdFavoriteBorder

  return <Button data-test={'component-app'} onClick={onClick}>
    <Icon size='32px' /> {likes} likes!
  </Button>
}

FavButton.propTypes = {
  liked: PropTypes.bool.isRequired,
  likes: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired
}