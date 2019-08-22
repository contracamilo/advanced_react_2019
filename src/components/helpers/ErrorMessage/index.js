import React from 'react'
import { Error, Title } from './styles'

export const ErrorMessage = ({ error = 'error' } = {}) => {
  return (
    <Error>
      <div>
        <Title >Upps!</Title >
        <p>{error.message || 'Guau' }🐶!!</p>
      </div>
    </Error>
  )
}
