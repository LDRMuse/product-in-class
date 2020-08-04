import React, {useState, useEffect} from 'react'

import { ProductTable } from './ProductTable'
import { FiltersBar } from './FiltersBar'

import api from 'api'


export const FilterableProductTable = () => {
  const [inStockOnly, setInStockOnly] = useState(false)
  const [maxPrice, setMaxPrice] = useState(null),
  const [products, setProducts] = useState([]),
  const [searchText, setSearchText] = useState(''),


  // componentDidMount = useEffect in hooks
  const async componentDidMount() {
    this.setState({ products: await api.index() })
  }


  const filterHandler = ({ target }) => {
    if( target.type === 'checkbox') {
      setState({inStockOnly: target.checked})
    }
    else if (target.type === 'number') {
      setState({ maxPrice: target.value })
    } else {
      setState({ searchText: target.value })
    }
  }


  render() {

    const filteredProducts = this.state.products.filter(({ name }) => {
      return name.toLowerCase().startsWith(this.state.searchText.toLowerCase())
    }).filter(({ stocked }) => {
      return inStockOnly ? stocked : true
    }).filter(({ price }) => this.state.maxPrice ?
      Number.parseFloat(price.slice(1)) <= maxPrice : true)


    return (
      <main className='flex flex--column flex--align-center'>
        <FiltersBar handler={filterHandler} />
        <ProductTable products={filteredProducts} />
      </main>
    )
  }
}

