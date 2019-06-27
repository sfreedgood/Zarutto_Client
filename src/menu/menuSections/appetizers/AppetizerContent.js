import React, {Component} from "react"
import Axios from "axios"
import "../../menu.css"
import Appetizer from "./Appetizer";

export default class AppetizerContent extends Component{
  state = {  }

  componentWillMount = () => {
    this.getMenu()
  }

  getMenu = async () => {
    const res = await Axios.get('http://localhost:3000/menus')
    let menu = res.data.menu
    this.getApps(menu)
  }

  getApps = (menu) => {
    let apps = menu.filter(item => {
      if (item.course_type === "Appetizers") {
        return item
      }
    })
    this.setApps(apps)
  }

  setApps = (apps) => {
    let appData = apps
    let gyozaItems = appData.filter(item => {
      if (item.style_type === "Gyoza") {
        return item
      }
    })
    let otherItems = appData.filter(item => {
      if (item.style_type === null) {
        return item
      }
    })
    this.setState( () => (
      {
        gyozaItems,
        otherItems
      }
    ))
  }

  renderApps = (items) => {
    let itemsToRender = items.map((item, key) => {
      return(
        <Appetizer key={key} item={item} />
      )
    })
    return itemsToRender
  }

  render() {  
    console.log(this.state.appItems)
    return(
        <div className="menu-section-container">
          <div className="menu-section">
            <div className="menu-head">Gyoza <span className="item-detail">(6pcs)</span></div>
            {
              this.state.gyozaItems &&
              this.renderApps(this.state.gyozaItems)
            }
          </div>
          {
            this.state.otherItems &&
            this.renderApps(this.state.otherItems)
          }
        </div>
    )
  }
}