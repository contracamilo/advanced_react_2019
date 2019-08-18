import React from 'react'
import { Category } from '../categories'
import { List, Item } from './styles'
import { categories } from '../../../api/db.json'

export const ListOfCategories = () => {
  return (
    <div>
      <List>
        {
          categories.map((category, index) =>
            <Item key={category.id}>
              <Category {...category} />
            </Item>
          )
        }
      </List>
    </div>
  )
}
