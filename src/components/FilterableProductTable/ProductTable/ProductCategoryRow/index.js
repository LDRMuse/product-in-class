import React from 'react'
import PropTypes from 'prop-types'

export const ProductCategoryRow = ({category}) => <tr><td>{category}</td></tr>

ProductCategoryRow.propTypes = {
  category: PropTypes.string.isRequired,
}
