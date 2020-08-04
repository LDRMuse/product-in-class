import React from 'react'
import PropTypes from 'prop-types'

export const ProductCategoryRow = ({category}) => <tr><th>{category}</th></tr>

ProductCategoryRow.propTypes = {
  category: PropTypes.string.isRequired,
}
