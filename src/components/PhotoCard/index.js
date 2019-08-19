import React from 'react'
import { ImgWrapper, Img, Button } from './styles'
import { MdFavoriteBorder } from 'react-icons/md'

const DEFAULT_IMAGE = 'https://i.imgur.com/dJa0Hpl.jpg'

export const PhotoCard = ({ id, likes = 0, src }) => (
  <article data-test={'photoCard'}>
    <a href={`/detail/${id}`}>
      <ImgWrapper>
        <Img src={DEFAULT_IMAGE} alt='img' />
      </ImgWrapper>
    </a>
    <Button>
      <MdFavoriteBorder size={32} />
      {likes} likes!
    </Button>
  </article>
)
