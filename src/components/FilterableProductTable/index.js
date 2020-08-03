import React from 'react'

import { ProductTable } from './ProductTable'
import { FiltersBar } from './FiltersBar'

import api from 'api'


export class FilterableProductTable extends React.Component {

  state = {
    maxPrice: '',
    inStockOnly: false,
    searchText: '',
    products: [],
  }
  // componentDidMount = useEffect in hooks
  async componentDidMount() {
    this.setState({ products: await api.index() })
  }


  filterHandler = ({ target }) => {
    if( target.type === 'checkbox') {
      this.setState({inStockOnly: target.checked})
    }
    else if (target.type === 'number') {
      this.setState({ maxPrice: target.value })
    } else {
      this.setState({ searchText: target.value })
    }
  }


  render() {

    const filteredProducts = this.state.products.filter(({ name }) => {
      return name.toLowerCase().startsWith(this.state.searchText.toLowerCase())
    }).filter(({ stocked }) => {
      return this.state.inStockOnly ? stocked : true
    }).filter(({ price }) => this.state.maxPrice ?
      Number.parseFloat(price.slice(1)) <= this.state.maxPrice : true)


    return (
      <main className='flex flex--column flex--align-center'>
        <FiltersBar handler={this.filterHandler} />
        <ProductTable products={filteredProducts} />
      </main>
    )
  }
}

