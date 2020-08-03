import React, { Fragment } from 'react'

import { ProductTable } from './ProductTable'
import { SearchBar } from './SearchBar'

import api from 'api'


export class FilterableProductTable extends React.Component {

  state = {
    searchText: '',
    products: [],
  }
  // componentDidMount = useEffect in hooks
  async componentDidMount() {
    this.setState({ products: await api.index() })
  }



  render() {
    return (
      <main className='flex flex--column flex--align-center'>
        <p>FPT</p>
        <SearchBar />
        <ProductTable products={this.state.products} />
      </main>
    )
  }
}

