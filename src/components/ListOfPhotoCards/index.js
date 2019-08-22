import React from 'react'
import { PhotoCard } from '../PhotoCard'

/**
 * Functional react component for show List Of Photocards in the app
 * @function ListOfPhotoCards
 * @returns {JSX.Element} rendered list of Photo Cards
 */

export const ListOfPhotoCardsComponent = ({ data: { photos = [] } = {} }) => {
  return (
    <div data-test={'photoCards'}>
      <ul>
        {photos.map((photo, index) =>
          <li key={index}>
            <PhotoCard key={photo.id} {...photo} />
          </li>
        )}
      </ul>
    </div>
  )
}
