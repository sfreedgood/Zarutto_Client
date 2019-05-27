import React from "react"

const Appetizer = (props) => {
  console.log(props)
  const sanitizeMultiples = (field) =>{
    let values = []
    if (Array.isArray(field)){
      field.forEach(val => values.push(val))
    }

  }

  return (
    <div className="menu-item d-flex flex-row mb-2 dots">
      <span className="content dots-left">{props.item.style_type && `${props.item.style_type}:`} {props.item.item_name}</span>
      {
        props.item.details &&
        <span className="item-detail">({props.item.details})</span>
      }
      {
        props.item.pieces &&
        <span className="item-detail">({props.item.pieces}pcs)</span>
      }
      <span className="price ml-auto ml-auto dots-right">${props.item.price}</span>
    </div>
  )
}

export default Appetizer