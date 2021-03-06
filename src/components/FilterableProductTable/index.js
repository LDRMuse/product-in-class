import React from 'react'

import { ProductTable } from './ProductTable'
import { FiltersBar } from './FiltersBar'

import api from 'api'


export class FilterableProductTable extends React.Component {

  state = {
    inStockOnly: false,
    searchText: '',
    products: [],
  }
  // componentDidMount = useEffect in hooks
  async componentDidMount() {
    this.setState({ products: await api.index() })
  }


  searchHandler = ({target}) => {
    if(target.type === 'checkbox') {
      this.setState({inStockOnly: target.checked})
    } else {
      this.setState({searchText: target.value})
    }
  }


  render() {

    const filteredProducts = this.state.products.filter(({name}) => {
      return name.toLowerCase().startsWith(this.state.searchText.toLowerCase())
    }).filter(({ stocked }) => {
     return this.state.inStockOnly ? stocked : true
    })

    return (
      <main className='flex flex--column flex--align-center'>
        <FiltersBar handler={this.searchHandler}/>
        <ProductTable products={filteredProducts} />
      </main>
    )
  }
}

