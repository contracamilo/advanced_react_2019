import React from 'react'
import { Category } from '../Categories'
import { List, Item } from './styles'
import { categories } from '../../../api/db.json'

export const ListOfCategories = () => {
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
