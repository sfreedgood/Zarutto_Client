import React, {Component} from "react"
import "../../menu.css"

export default class Drink extends Component {
  state = {

  }

  checkMultiples = (data) => {
    if (data) {
      console.log(data.splice(","))
      console.log(typeof(data))
    }
    
    if (Array.isArray(data)){
      return true
    } else {
      return false
    }
  }

  render() {
    // let keysArr = Object.keys(this.props.item)
    // this.sanitizeMultiples(keysArr, this.props.item)
    return (
      <div className="menu-item d-flex mb-2">
        <div className="flex-row dots">
          <span className="content dots-left">
            {this.props.item.item_name}
          </span>
          {
            this.props.item.details &&
            <span className="item-detail">({this.props.item.details})</span>
          }
          {
            this.props.item.pieces &&
            <span className="item-detail">({this.props.item.pieces})</span>
          }
          <span className="price ml-auto ml-auto dots-right">
            {
              (this.checkMultiples(this.props.item.pieces)
              && this.checkMultiples(this.props.item.pieces))
              ? `(${this.props.item.pieces[0]}) $${this.props.item.price[0]} (${this.props.item.pieces[1]}) $${this.props.item.price[1]}`
              : `$${this.props.item.price}`
            }
            
          </span>
        </div>
        {
          this.props.item.ingredients &&
          <div className="item-detail">({this.props.item.ingredients})</div>
        }
      </div>
    )
  }
}