import React from 'react'
import { Error, Title } from './styles'

export const ErrorMessage = ({ error }) => {
  return (
    <Error>
      <div>
        <Title >Upps!</Title >
        <p>{error || 'Guau' }</p>
        <span>🐶!!</span>
      </div>
    </Error>
  )
}
