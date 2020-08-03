import React from 'react'
import PropTypes from 'prop-types'

// import { ProductCategoryRow } from "./ProductCategoryRow"
import { ProductRow } from "./ProductRow"

// TODO: Map over products and return a product row with name and price for each individual product


export const ProductTable = ({ products }) => {

  const renderProductRows = () =>
    products.map(({ name, price }, i) => <ProductRow name={name} price={price} key={i} />)


  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
        {/*<ProductCategoryRow />*/}
        {renderProductRows()}
      </tbody>
    </table>
  )
}

ProductTable.propTypes = {
  products: PropTypes.array.isRequired,
}
