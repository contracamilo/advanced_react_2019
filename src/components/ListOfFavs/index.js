import React from 'react'
import { Link, Grid, Image } from './styles'
import PropTypes from 'prop-types'


export const ListOfFavs = ({ favs = [] }) => {
  return <Grid data-test={'fav-list'}>

    {
      favs.map(fav => <Link to={`/detail/${fav.id}`} key={fav.id}>
        <Image src={fav.src} />
      </Link>

      )
    }
  </Grid>
}

ListOfFavs.propTypes = {
  favs: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      src: PropTypes.string.isRequired
    })
  )
}
