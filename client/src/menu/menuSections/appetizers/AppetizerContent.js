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
    // fetch('http://localhost:3000/menus')
    //   .then(data => {
    //     return data.json()
    //   }, err => console.log(err))
    //   .then(parsedData => {
    //     console.log(parsedData)
    //   }, err => console.log(err))
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
    this.setState( prevState => (
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
            <div className="menu-head">Gyoza</div>
            {
              this.state.gyozaItems &&
              this.renderApps(this.state.gyozaItems)
            }
          </div>
          {
            this.state.otherItems &&
            this.renderApps(this.state.otherItems)
          }
            

            {/* <div className="menu-item d-flex flex-row dots">
                <span className="content dots-left">Regular</span>
                <span className="price ml-auto dots-right">$6</span>
            </div>

            <div className="menu-item d-flex flex-row dots">
                <span className="content dots-left">Cheese</span>
                <span className="price ml-auto dots-right">$7</span>
            </div>

            <div className="menu-item d-flex flex-row mb-2 dots">
                <span className="content dots-left">Radish</span>
                <span className="price ml-auto dots-right">$7</span>
            </div>

            <div className="menu-item d-flex flex-row mb-2 dots">
                <span className="content dots-left">Edamame</span>
                <span className="price ml-auto dots-right">$4</span>
            </div>

            <div className="menu-item d-flex flex-row mb-2 dots">
              <span className="content dots-left">Edamame</span>
              <span className="item-detail">(w/ garlic butter)</span>
              <span className="price ml-auto ml-auto dots-right">$5</span>
            </div>

            <div className="menu-item d-flex flex-row mb-2 dots">
                <span className="content dots-left">Kimchi</span>
                <span className="price ml-auto dots-right">$4</span>
            </div>

            <div className="menu-item d-flex flex-row mb-2 dots">
                <span className="content dots-left">Sesame Cucumber</span>
                <span className="price ml-auto dots-right">$6</span>
            </div>

            <div className="menu-item d-flex flex-row mb-2 dots">
              <span className="content dots-left">Karaage</span>
              <span className="item-detail">(fried chicken)</span>
              <div className="dots-right">
              <span className="item-detail ml-auto">(3pcs)</span>
              <span className="price">$4</span>
              <span className="item-detail">(6pcs)</span>
              <span className="price">$7</span>
              </div>

            </div>

            <div className="menu-item d-flex flex-row mb-2 dots">
                <span className="content dots-left">Roasted Pork Buns</span> <span className="item-detail">(2pcs)</span>
                <span className="price ml-auto dots-right">$7</span>
            </div>

            <div className="menu-item d-flex flex-row mb-2 dots">
                <span className="content dots-left">Takoyaki</span>
                <span className="item-detail">(8pcs)</span>
                <span className="price ml-auto dots-right">$7</span>
            </div>

            <div className="menu-item d-flex flex-row mb-2 dots">
                <span className="content dots-left">French Fries, Okonomiyaki Style</span>
                <span className="price ml-auto dots-right">$6</span>
            </div>

            <div className="menu-item d-flex flex-row mb-2 dots">
                <span className="content dots-left">Zarutto Salad</span>
                <span className="price ml-auto dots-right">$8</span>
            </div>

            <div className="menu-item d-flex flex-row mb-2 dots">
                <span className="content dots-left">Tofu Salad</span>
                <span className="price ml-auto dots-right">$8</span>
            </div> */}
        </div>
    )
  }
}