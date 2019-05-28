import React, {Component} from "react"
import "../../menu.css"

export default class Appetizer extends Component {
  state = {

  }

  // sanitizeMultiples = (keysArr, item) =>{
  //   keysArr.forEach((key, index) => {
  //     if (Array.isArray(item[key])) {
  //       this.setState(prevState => ({
  //         ...prevState,
  //         [`set${index}`]: 
  //       }))
  //     }
  //   })
  // }

  render() {
    // let keysArr = Object.keys(this.props.item)
    // this.sanitizeMultiples(keysArr, this.props.item)
    let dots = this.props.item.style_type ? "dots-right-section" : "dots-right"
    return (
      <div className="menu-item d-flex flex-row mb-2 dots">
        <span className="content dots-left">
          {this.props.item.item_name}
        </span>
        {
          this.props.item.details &&
          <span className="item-detail">({this.props.item.details})</span>
        }
        {
          this.props.item.pieces &&
          <span className="item-detail">({this.props.item.pieces}pcs)</span>
        }
        <span className={`price ml-auto ml-auto ${dots}`}>${this.props.item.price}</span>
        
      </div>
    )
  }
}