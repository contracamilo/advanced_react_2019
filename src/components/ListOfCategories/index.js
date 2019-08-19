import React, { useEffect, useState } from 'react'
import { Category } from '../Categories'
import { List, Item } from './styles'
import { Loading } from '../helpers/Loading'

/**
 * Custom Hook to fetch data and update the state and returns an object, also manage the loading state
 * @Hook
 * @function useCategoriesDate
 * @returns { categories }
 */

const useCategoriesData = () => {
  const [categories, setCategories] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    window.fetch('https://camigram-server-k44zscah9.now.sh/categories')
      .then(res => res.json())
      .then(response => {
        setCategories(response)
        setLoading(false)
      })
  }, []) // [] second param only one time

  return { categories, loading }
}

/**
 * Functional react component for show List Of categories, works with the custom hook useCategoriesData
 * @function ListOfCategories
 * @returns {JSX.Element} rendered comp (fixed if the scroll is over 200px)
 */

export const ListOfCategories = () => {
  const { categories, loading } = useCategoriesData()
  const [showFixed, setShowFixed] = useState(false)

  useEffect(() => {
    const onScroll = e => {
      const newShowFixed = window.scrollY > 200
      showFixed !== newShowFixed && setShowFixed(newShowFixed)
    }

    document.addEventListener('scroll', onScroll)

    return () => document.removeEventListener('scroll', onScroll)
  }, [showFixed])

  const renderList = (fixed) => (
    <List fixed={fixed}>
      {
        loading
          ? <Loading />
          : categories.map((category, index) =>
            <Item key={category.id}>
              <Category {...category} />
            </Item>
          )
      }
    </List>
  )

  if (loading) {
    return <Loading />
  }

  return (
    <React.Fragment>
      {renderList()}
      {showFixed && renderList(true)}
    </React.Fragment>
  )
}
