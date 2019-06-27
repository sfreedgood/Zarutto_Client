import React, {Component} from "react"
import Dessert from "./Dessert"
import Axios from "axios"
import "../../menu.css"

let baseUrl = process.env.REACT_APP_SERVER || 'http://localhost:3000'

export default class DessertContent extends Component {
  state = {}

  componentWillMount = () => {
    this.getMenu()
  }

  getMenu = async () => {
    const res = await Axios.get(`${baseUrl}/menus`)
    let menu = res.data.menu
    this.getDesserts(menu)
  }

  getDesserts = (menu) => {
    let desserts = menu.filter(item => {
      if (item.course_type === "Desserts") {
        return item
      }
    })

    this.renderDesserts(desserts)
  }

  renderDesserts = (items) => {
    let itemsToRender = items.map((item, key) => {
      return(
        <Dessert key={key} item={item} />
      )
    })
    this.setState(prevState => ({itemsToRender}))
  }

  render() {
    return(
        <div className="menu-section-container pt-3">
          {
            this.state.itemsToRender &&
            this.state.itemsToRender
          }
        </div>
    )
  }
}