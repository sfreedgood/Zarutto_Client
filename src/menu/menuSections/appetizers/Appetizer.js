import React, {Component} from "react"
import "../../menu.css"

export default class Appetizer extends Component {
  state = {}

  componentWillMount = () => {
    let keys = Object.keys(this.props.item)
    this.sanitizeMultiples(keys, this.props.item)
  }

  sanitizeMultiples = (keys, item) =>{
    keys.forEach(key => {
      let values = item[key]
      let splitItems = typeof(values) === "string" && values.split(",")
      if (values && splitItems.length > 1) {
        this.setState(() => ({
          [key]: {
            bool: true,
            value: splitItems
          }
          }))
      } else {
        this.setState(() => ({
          [key]: {
            bool: false,
            value: splitItems[0]
          }
        }))
      }
    })
  }

  render() {
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
          this.state.pieces.bool
            ? <span className={`price ml-auto ml-auto ${dots}`}>
              <span className="item-detail">({this.state.pieces.value[0]}pcs)</span>${this.state.price.value[0]} <span className="item-detail">({this.state.pieces.value[1]}pcs)</span>${this.state.price.value[1]}
              </span>
            : <span className="item-detail">({this.state.pieces.value}pcs)</span> && <span className={`price ml-auto ml-auto ${dots}`}>${this.props.item.price}</span>
        }
      </div>
    )
  }
}