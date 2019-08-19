import React, { useEffect, useState } from 'react'
import { Category } from '../Categories'
import { List, Item } from './styles'

export const ListOfCategories = () => {
  const [categories, setCategories] = useState([])
  const [showFixed, setShowFixed] = useState(false)

  useEffect(() => {
    window.fetch('https://camigram-server-k44zscah9.now.sh/categories')
      .then(res => res.json())
      .then(response => {
        setCategories(response)
      })
  }, []) // [] second param only one time

  useEffect(() => {
    const onScroll = e => {
      const newShowFixed = window.scrollY > 200
      showFixed !== newShowFixed && setShowFixed(newShowFixed)
    }

    document.addEventListener('scroll', onScroll)

    return () => document.removeEventListener('scroll', onScroll)
  }, [showFixed])

  const renderList = (fixed) => (
    <List className={fixed ? 'fixed' : ''}>
      {
        categories.map((category, index) =>
          <Item key={category.id}>
            <Category {...category} />
          </Item>
        )
      }
    </List>
  )

  return (
    <React.Fragment>
      {renderList()}
      {showFixed && renderList(true)}
    </React.Fragment>
  )
}
