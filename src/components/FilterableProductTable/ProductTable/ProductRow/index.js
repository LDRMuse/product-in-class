import React from 'react'
import PropTypes from 'prop-types'

import './ProductRow.css'


export const ProductRow = ({ name, price, stocked }) =>
  <tr>
    <td className={!stocked ? 'out-of-stock' : ''}>{name}</td>
    <td>{price}</td>
  </tr>



ProductRow.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.string,
  stocked: PropTypes.bool

}
