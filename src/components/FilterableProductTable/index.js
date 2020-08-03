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


  searchHandler = ({target}) => {
    this.setState({searchText: target.value})
  }


  render() {

    const filteredProducts = this.state.products.filter(({name}) => {
      return name.startsWith(this.state.searchText.toLowerCase())
    })


    return (
      <main className='flex flex--column flex--align-center'>
        <p>FPT</p>
        <SearchBar handler={this.searchHandler}/>
        <ProductTable products={filteredProducts} />
      </main>
    )
  }
}

