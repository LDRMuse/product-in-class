import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import { ProductCategoryRow as CatRow } from "./ProductCategoryRow"
import { ProductRow } from "./ProductRow"

// TODO: Map over products and return a product row with name and price for each individual product


export const ProductTable = ({ products }) => {
  const categorizedProducts = products.reduce((categorizedProds, product) => {

    //const { category } = product
    //(this is destructing..below can be just category instead of product.category)

    categorizedProds[product.category] = categorizedProds[product.category] ? categorizedProds[product.category].concat(product) : [product]

    return categorizedProds

  },
    {})
// above is adding to the object in the second parameter

  const renderProductRows = (prods) =>
    prods.map(({ name, price, stocked }, i) => <ProductRow name={name} price={price} stocked={stocked} key={i} />)

  const renderTable = () => {
    return Object.keys(categorizedProducts).map((cat, i) => (
      <Fragment key={i}>
        <CatRow category={cat} />
        {renderProductRows(categorizedProducts[cat])}
      </Fragment>
    ))
  }


  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
        {renderTable()}
      </tbody>
    </table>
  )
}

ProductTable.propTypes = {
  products: PropTypes.array.isRequired,
}
