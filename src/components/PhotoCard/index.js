import React from 'react'
import { Article, ImgWrapper, Img } from './styles'

// custom hooks
import { useLocalStorage } from '../../hooks/useLocalStorage'
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

export const PhotoCard = ({ id, likes = 0, src = DEFAULT_IMAGE }) => {
  const key = `like-${id}`
  // hooks
  const [liked, setLiked] = useLocalStorage(key, false)
  const [show, el] = useNearScreen()

  return (
    <Article ref={el} data-test={'photoCard'}>
      {
        show && <React.Fragment>
          <a href={`/?detail=${id}`}> {/* Query String */}
            <ImgWrapper>
              <Img src={src} alt='img' />
            </ImgWrapper>
          </a>
          <ToggleLikeMutation>
            {
              (toggleLike) => {
                const handleFavClick = () => {
                  !liked && toggleLike({ variables: {
                    input: { id }
                  } })

                  setLiked(!liked)
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
