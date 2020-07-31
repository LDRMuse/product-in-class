import React, { Fragment } from 'react'

import { ProductTable } from './ProductTable'
import { SearchBar } from './SearchBar'


export class Filter extends React.Component {
  render() {
    return (
      <Fragment>
        <p>FPT</p>
        <ProductTable />
        <SearchBar />
      </Fragment>
    )
  }
}

