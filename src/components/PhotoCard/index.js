import React from 'react'
import { Article, ImgWrapper, Img, Button } from './styles'
import { MdFavoriteBorder, MdFavorite } from 'react-icons/md'

// custom hooks
import { useLocalStorage } from '../../hooks/useLocalStorage'
import { useNearScreen } from '../../hooks/useNearScreen'

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

  // conditional to show the like icon
  const Icon = liked ? MdFavorite : MdFavoriteBorder

  return (
    <Article ref={el} data-test={'photoCard'}>
      {
        show && <React.Fragment>
          <a href={`/detail/${id}`}>
            <ImgWrapper>
              <Img src={src} alt='img' />
            </ImgWrapper>
          </a>
          <Button onClick={() => setLiked(!liked)}>
            <Icon size={32} />
            {likes} likes!
          </Button>
        </React.Fragment>
      }

    </Article>
  )
}
