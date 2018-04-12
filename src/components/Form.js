import React from 'react'

const Form = props => (
  <div>
      <form onSubmit={props.getItunes}>
        <input type="text" name="search" placeholder="Search..." />
        <button className="btn btn-info">Search</button>
        </form>
      </div>
)


export default Form
