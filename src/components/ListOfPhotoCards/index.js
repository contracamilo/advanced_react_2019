import React from 'react'
import { PhotoCard } from '../PhotoCard'

export const ListOfPhotoCards = () => {
  return (
    <div data-test={'photoCards'}>
      <ul>
        {[1, 2, 3].map(id =>
          <li key={id}>
            <PhotoCard />
          </li>
        )}
      </ul>
    </div>
  )
}
