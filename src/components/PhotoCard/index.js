import React from 'react'
import { Article, ImgWrapper, Img } from './styles'
import { Link } from '@reach/router'
import PropTypes from 'prop-types'

// custom hooks
import { useNearScreen } from '../../hooks/useNearScreen'
import { FavButton } from '../FavButton'
import { ToggleLikeMutation } from '../Container/ToggleLikeMutation'

const DEFAULT_IMAGE = 'https://i.imgur.com/dJa0Hpl.jpg'

/**
 * Functional react component for show a Card
 * @function PhotoCard
 * @param id object identificator
 * @param likes number of likes
 * @param src Url for the image in the component
 * @returns {JSX.Element} rendered a single Card
 */

export const PhotoCard = ({ id, liked, likes = 0, src = DEFAULT_IMAGE }) => {
  // hooks
  const [show, el] = useNearScreen()

  return (
    <Article ref={el} data-test={'photoCard'}>
      {
        show && <React.Fragment>
          <Link to={`/detail/${id}`}> {/* Query String */}
            <ImgWrapper>
              <Img src={src} alt='img' />
            </ImgWrapper>
          </Link>
          <ToggleLikeMutation>
            {
              (toggleLike) => {
                const handleFavClick = () => {
                  toggleLike({ variables: {
                    input: { id }
                  } })
                }

                return <FavButton liked={liked} likes={likes} onClick={handleFavClick} />
              }
            }
          </ToggleLikeMutation>
        </React.Fragment>
      }

    </Article>
  )
}

PhotoCard.propTypes = {
  id: PropTypes.string.isRequired,
  liked: PropTypes.bool.isRequired,
  src: PropTypes.string.isRequired,
  likes: function (props, propName, componentName) {
    const propValue = props[propName]

    if (propValue === undefined) {
      return new Error(`${propName} value must be defined`)
    }

    if (propValue < 0) {
      return new Error(`${propName} value must be greater than 0`)
    }
  }
}
