import React, { useEffect, useState } from 'react'
import { Category } from '../Categories'
import { List, Item } from './styles'

export const ListOfCategories = () => {
  const [categories, setCategories] = useState([])

  useEffect(() => {
    window.fetch('https://camigram-server-k44zscah9.now.sh/categories')
      .then(res => res.json())
      .then(response => {
        setCategories(response)
      })
  }, []) // [] second param only one time

  return (
    <React.Fragment>
      <List>
        {
          categories.map((category, index) =>
            <Item key={category.id}>
              <Category {...category} />
            </Item>
          )
        }
      </List>
    </React.Fragment>
  )
}
