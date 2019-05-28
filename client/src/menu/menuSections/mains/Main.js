import React from "react"
import "../../menu.css"

const Main = (props) => {
  console.log(props)
  // const sanitizeMultiples = (field) =>{
  //   let values = []
  //   if (Array.isArray(field)){
  //     field.forEach(val => values.push(val))
  //   }

  // }

  return (
    <div className="menu-item d-flex mb-2">
      <div className="flex-row dots">
        <span className="content dots-left">
          {props.item.item_name}
        </span> 
        {
          props.item.pieces &&
          <span className="">({props.item.pieces}pcs)</span>
        }     
        <span className="price ml-auto ml-auto dots-right">${props.item.price}</span>
      </div>
      {
        props.item.details &&
        <div className="item-detail">({props.item.details})</div>
      }
      {
        props.item.ingredients &&
        <div className="item-detail">{props.item.ingredients}</div>
      }
      
    </div>
  )
}

export default Main