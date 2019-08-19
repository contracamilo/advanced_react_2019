import React from 'react'
import { PhotoCard } from '../PhotoCard'

/**
 * Functional react component for show List Of Photocards in the app
 * @function ListOfPhotoCards
 * @returns {JSX.Element} rendered list of Photo Cards
 */
export const ListOfPhotoCards = () => {
  return (
    <div data-test={'photoCards'}>
      <ul>
        {[1, 2, 3, 4, 5, 6, 7].map(id =>
          <li >
            <PhotoCard key={id} id={id} />
          </li>
        )}
      </ul>
    </div>
  )
}
