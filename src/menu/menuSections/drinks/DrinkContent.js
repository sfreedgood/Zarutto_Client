import React, {Component} from "react"
import Axios from "axios"
import "../../menu.css"
import Drink from "./Drink";

let baseUrl = process.env.REACT_APP_SERVER || 'http://localhost:3000'

export default class DrinkContent extends Component{
  state = {  }

  componentWillMount = () => {
    this.getMenu()
  }

  getMenu = async () => {
    const res = await Axios.get(`${baseUrl}/menus`)
    let menu = res.data.menu
    this.getDrinks(menu)
  }

  getDrinks = (menu) => {
    let drinks = menu.filter(item => {
      if (item.course_type === "Drinks") {
        return item
      }
    })
    this.setDrinks(drinks)
  }

  setDrinks = (drinks) => {
    let drinkData = drinks
    let draftBeer = drinkData.filter(item => {
      if (item.style_type === "draft beer") {
        return item
      }
    })
    let bottledBeer = drinkData.filter(item => {
      if (item.style_type === "bottled beer") {
        return item
      }
    })
    let sake = drinkData.filter(item => {
      if (item.style_type === "sake") {
        return item
      }
    })
    let whiteWine = drinkData.filter(item => {
      if (item.style_type === "white wine") {
        return item
      }
    })
    let redWine = drinkData.filter(item => {
      if (item.style_type === "red wine") {
        return item
      }
    })
    let softDrink = drinkData.filter(item => {
      if (item.style_type === "soft drink") {
        return item
      }
    })
    this.setState( prevState => (
      {
        draftBeer,
        bottledBeer,
        sake,
        whiteWine,
        redWine,
        softDrink
      }
    ))
  }

  renderDrinks = (items) => {
    let itemsToRender = items.map((item, key) => {
      return(
        <Drink key={key} item={item} />
      )
    })
    return itemsToRender
  }

  render() {  
    return(
        <div className="menu-section-container">
            <div className="menu-head">Draft Beers</div>
            {
              this.state.draftBeer &&
              this.renderDrinks(this.state.draftBeer)
            }

            <div className="menu-head">Bottled Beers</div>
            {
              this.state.bottledBeer &&
              this.renderDrinks(this.state.bottledBeer)
            }

            <div className="menu-head">Sake</div>
            {
              this.state.sake &&
              this.renderDrinks(this.state.sake)
            }

            <div className="menu-head">White Wine</div>
            {
              this.state.whiteWine &&
              this.renderDrinks(this.state.whiteWine)
            }

            <div className="menu-head">Red Wine</div>
            {
              this.state.redWine &&
              this.renderDrinks(this.state.redWine)
            }

            <div className="menu-head">Soft Drinks</div>
            {
              this.state.softDrink &&
              this.renderDrinks(this.state.softDrink)
            }
        </div>
    )
  }
}