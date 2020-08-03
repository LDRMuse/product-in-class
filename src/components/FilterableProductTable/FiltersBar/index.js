import React from "react"
import PropTypes from 'prop-types'

export const FiltersBar = ({handler}) => {
  const handleChange = (event) => {
    handler(event)
  }
  return (
  <div className="flex flex--column flex--align-center">
    <input type="search" onChange={handleChange}/>
    <label>
      <input type="checkbox" onChange={handleChange}/>
      In Stock Only
    </label>
    <label>
    <input type="number" onChange={handleChange} />
    Number
    </label>
  </div>

)
}

FiltersBar.propTypes = {
  handler: PropTypes.func.isRequired,
}
