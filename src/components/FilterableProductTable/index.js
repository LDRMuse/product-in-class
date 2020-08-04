import React, { useState, useEffect } from 'react'

import { ProductTable } from './ProductTable'
import { FiltersBar } from './FiltersBar'

import api from 'api'


export const FilterableProductTable = () => {
  const [inStockOnly, setInStockOnly] = useState(false)
  const [maxPrice, setMaxPrice] = useState(null)
  const [products, setProducts] = useState([])
  const [searchText, setSearchText] = useState('')


  useEffect(() => {
    (async () => {
      setProducts(await api.index())
    })()
  }, [])


  const filterHandler = ({ target: { type, checked, value } }) => {
    switch (type) {
      case 'checkbox':
        setInStockOnly(checked)
        break
      case 'number':
        setMaxPrice(value)
        break
      default:
        setSearchText(value)
    }
  }


  const filteredProducts = products.filter(({ name }) => {
    return name.toLowerCase().startsWith(searchText.toLowerCase())
  }).filter(({ stocked }) => {
    return inStockOnly ? stocked : true
  }).filter(({ price }) => maxPrice ?
    Number.parseFloat(price.slice(1)) <= maxPrice : true)


  return (
    <main className='flex flex--column flex--align-center'>
      <FiltersBar handler={filterHandler} />
      <ProductTable products={filteredProducts} />
    </main>
  )
  }
