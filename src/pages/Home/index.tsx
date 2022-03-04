import React, { useState, useEffect, useMemo } from 'react'
import { api } from '../../services/api'
import { Header } from '../../components/Header'
import { Listing } from '../../components/Listing'
import { uniq } from 'lodash'
import { IListing } from '../../interfaces'

const Home = () => {
  const [filteredData, setFilteredData] = useState<IListing[]>([])
  const [listItems, setItems] = useState<IListing[]>([])
  const [filterOptions, setFilterOptions] = useState([])

  useEffect(() => {
    let filterItems: string[] = []
    listItems.forEach(item => {
      if (Array.isArray(item.category)) {
        item.category.forEach(category => filterItems.push(category.name))
      } else {
        filterItems.push(item.category.name)
      }
    })
    setFilterOptions(uniq(filterItems.map(item => item.toLowerCase())))
  }, [listItems])

  useEffect(() => {
    api.get('/data').then(response => {
      setItems(response.data.nodes)
      setFilteredData(response.data.nodes)
    })
  }, [])

  const filterAction = (filter: string) => {
    setFilteredData(
      listItems.filter(item => {
        if (Array.isArray(item.category)) {
          return item.category.some(
            category => category.name.toLowerCase() === filter,
          )
        }
        return item.category.name.toLowerCase() === filter
      }),
    )
  }
  const clearFilter = () => {
    setFilteredData(listItems)
  }

  return useMemo(
    () => (
      <>
        <Header />

        <div>
          <h1>Home</h1>
          <button onClick={clearFilter}>Clear Filter</button>
          {filterOptions.map((item, index) => (
            <button key={`${index}-${item}`} onClick={() => filterAction(item)}>
              {item}
            </button>
          ))}

          {filteredData.map((item, index) => (
            <Listing key={`${index}-${item.id}`} {...item} />
          ))}

          <h1>Main</h1>
        </div>
      </>
    ),
    [listItems, filterOptions, filteredData],
  )
}

export default Home
