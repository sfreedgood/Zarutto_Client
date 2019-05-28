import React, {Component} from "react"
import Axios from "axios"
import "../../menu.css"
import Drink from "./Drink";

export default class DrinkContent extends Component{
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
    console.log(this.state.appItems)
    return(
        <div className="menu-section-container">
            <div className="menu-head">Draft Beers</div>
            {
              this.state.draftBeer &&
              this.renderDrinks(this.state.draftBeer)
            }
            {/* <div className="menu-item d-flex flex-column mb-2 dots">
                <span className="dots-left">Sapporo</span>
                <span className="price ml-auto ml-auto dots-right">$6</span>
            </div>
            <div className="menu-item d-flex flex-column mb-2 dots">
                <span className="dots-left">Asahi</span>
                <span className="price ml-auto ml-auto dots-right">$7</span>
            </div> */}

            <div className="menu-head">Bottled Beers</div>
            {
              this.state.bottledBeer &&
              this.renderDrinks(this.state.bottledBeer)
            }
            {/* <div className="menu-item d-flex flex-column mb-2 dots">
                <span className="dots-left">Kagua Rouge</span>
                <span className="price ml-auto ml-auto dots-right">$10</span>
            </div>
            <div className="menu-item d-flex flex-column mb-2 dots">
                <span className="dots-left">Kagua Blanc</span>
                <span className="price ml-auto ml-auto dots-right">$10</span>
            </div>
            <div className="menu-item d-flex flex-column mb-2 dots">
                <span className="dots-left">Ozeno Yukidoke Ipa</span>
                <span className="price ml-auto ml-auto dots-right">$10</span>
            </div>
            <div className="menu-item d-flex flex-column mb-2 dots">
                <span className="dots-left">Ozeno White Weizen</span>
                <span className="price ml-auto ml-auto dots-right">$10</span>
            </div>
            <div className="menu-item d-flex flex-column mb-2 dots">
                <span className="dots-left">Ginga Koge</span>
                <span className="price ml-auto ml-auto dots-right">$9</span>
            </div> */}

            <div className="menu-head">Sake</div>
            {
              this.state.sake &&
              this.renderDrinks(this.state.sake)
            }
            {/* <div className="menu-item d-flex flex-column mb-2 dots">
                <span className="dots-left">Daissai</span>
                <span className="price ml-auto ml-auto dots-right">
                    <span className="item-detail">(bottle)</span>
                    <span className="price">$50</span>
                    <span className="item-detail">(glass)</span>
                    <span className="price">$10</span>
                </span>
            </div> */}
            {/* <div className="menu-item d-flex flex-column mb-2 dots">
                <span className="dots-left">Nigori</span>
                <span className="price ml-auto ml-auto dots-right">$10</span>
            </div>
            <div className="menu-item d-flex flex-column mb-2 dots">
                <span className="dots-left">Kikusui</span>
                <span className="price ml-auto ml-auto dots-right">$12</span>
            </div>
            <div className="menu-item d-flex flex-column mb-2 dots">
                <span className="dots-left">Hakkaisan</span>
                <span className="price ml-auto ml-auto dots-right">$11</span>
            </div>
            <div className="menu-item d-flex flex-column mb-2 dots">
                <span className="dots-left">Hot Sake</span>
                <span className="price ml-auto ml-auto dots-right">$10</span>
            </div> */}

            <div className="menu-head">White Wine</div>
            {
              this.state.whiteWine &&
              this.renderDrinks(this.state.whiteWine)
            }
            {/* <div className="menu-item d-flex flex-column mb-2 dots">
                <span className="dots-left">House Chardonnay</span>
                <span className="price ml-auto ml-auto dots-right">$6</span>
            </div>
            <div className="menu-item d-flex flex-column mb-2 dots">
                <span className="dots-left">Sauvignon Blanc (New Zealand)</span>
                <span className="price ml-auto ml-auto dots-right">$8</span>
            </div>
            <div className="menu-item d-flex flex-column mb-2 dots">
                <span className="dots-left">Pinot Grigio (Italy)</span>
                <span className="price ml-auto ml-auto dots-right">$8</span>
            </div>
            <div className="menu-item d-flex flex-column mb-2 dots">
                <span className="dots-left">Chowa Plum Wine</span>
                <span className="price ml-auto ml-auto dots-right">$8</span>
                <div className="item-detail">(Japanese Green Plum)</div>
            </div> */}

            <div className="menu-head">Red Wine</div>
            {
              this.state.redWine &&
              this.renderDrinks(this.state.redWine)
            }
            {/* <div className="menu-item d-flex flex-column mb-2 dots">
                <span className="dots-left">House Merlot</span>
                <span className="price ml-auto ml-auto dots-right">$6</span>
            </div>
            <div className="menu-item d-flex flex-column mb-2 dots">
                <span className="dots-left">Cabernet (California)</span>
                <span className="price ml-auto ml-auto dots-right">$8</span>
            </div>
            <div className="menu-item d-flex flex-column mb-2 dots">
                <span className="dots-left">Pinot Noir (France)</span>
                <span className="price ml-auto ml-auto dots-right">$8</span>
            </div> */}

            <div className="menu-head d-flex flex-column mb-2 dots">
                <span className="dots-left">Soft Drinks</span>
                <span className="price ml-auto ml-auto dots-right">$3.5</span>
            </div>
            {
              this.state.softDrink &&
              this.renderDrinks(this.state.softDrink)
            }
            {/* <div className="menu-item flex-column mb-2 dots">
                <span className="soda">Coke</span>
            </div>
            <div className="menu-item flex-column mb-2 dots">
                <span className="soda">Diet Coke</span>
            </div>
            <div className="menu-item flex-column mb-2 dots">
                <span className="soda">Ginger Ale</span>
            </div>
            <div className="menu-item flex-column mb-2 dots">
                <span className="soda">Sparking Water</span>
            </div> */}
        </div>
    )
  }
}