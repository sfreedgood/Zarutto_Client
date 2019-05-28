import React, {Component} from "react"
import Main from "./Main"
import Axios from "axios"
import "../../menu.css"

export default class MainContent extends Component {
  state = {
  }

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
    this.getMains(menu)
  }

  getMains = (menu) => {
    let mains = menu.filter(item => {
      if (item.course_type === "Mains") {
        return item
      }
    })
    this.setMains(mains)
  }

  setMains = (mains) => {
    let mainData = mains

    let ramenMains = mainData.filter((item, key) => {
      if (item.style_type === "ramen") {
        return(
          <Main key={key} item={item} />
        )
      }
    })

    let ramenToppings = mainData.filter((item, key) => {
      if (item.style_type === "ramen topping") {
        return(
          <Main key={key} item={item} />
        )
      }
    })

    let otherMains = mainData.filter((item, key) => {
      if (item.style_type === null) {
        return(
          <Main key={key} item={item} />
        )
      }
    })
    console.log(otherMains)

    this.setState( prevState => (
      {
        ramenMains,
        ramenToppings,
        otherMains
      }
    ))
  }
  render() {
    console.log(this.state)
    return(
        <div className="menu-section-container">
            {/* {this.state.ramenMains}
            {this.state.ramenToppings}
            {this.state.otherMains} */}

            {/* <div className="menu-item d-flex flex-column mb-2 dots">
              <span className="content dots-left">Zurutto Ramen</span>
              <span className="price ml-auto ml-auto dots-right">$12</span>
              <div className="item-detail">(Chicken broth)</div>
              <div className="item-detail">Miso, corn, bean sprouts, cabbage, onion, scallion, ground pork, roasted pork, noodle</div>
            </div>
            <div className="menu-item d-flex flex-column mb-2 dots">
              <span className="content dots-left">Spicy Zurutto Ramen</span>
              <span className="price ml-auto ml-auto dots-right">$13</span>
              <div className="item-detail">(Chicken broth)</div>
              <div className="item-detail">Spicy oil, miso, corn, bean sprouts, cabbage, onion, scallion, ground pork, roasted pork</div>
            </div>
            <div className="menu-item d-flex flex-column mb-2 dots">
              <span className="content dots-left">Vegetable Soy Milk Miso Ramen</span>
              <span className="price ml-auto ml-auto dots-right">$15</span>
              <div className="item-detail">(Vegetable broth and soy milk)</div>
              <div className="item-detail">Miso, kimchi, onion, bean sprouts, cabbage, scallion, corn, sea weed, bamboo, noodle</div>
            </div>
            <div className="menu-item d-flex flex-column mb-2 dots">
              <span className="content dots-left">Truffle Dan Dan Ramen</span>
              <span className="price ml-auto ml-auto dots-right">$15</span>
              <div className="item-detail">(Vegetable broth; less soup & spicy)</div>
              <div className="item-detail">Sesame paste, white truffle oil, parmesan cheese, ground pork, seasoned boiled egg, crunchy onions, scallion, chili oil</div>
            </div>
          <div style={{"margin-bottom": "1em"}}>
            <div className="menu-head">Ramen Toppings</div>
            <div className="menu-item d-flex flex-row dots">
                <span className="content dots-left">Kaedama (Extra Noodles)</span>
                <span className="price ml-auto dots-right">$2</span>
            </div>
            <div className="menu-item d-flex flex-row dots">
                <span className="content dots-left">Roasted pork (2 Pcs)</span>
                <span className="price ml-auto dots-right">$3</span>
            </div>
            <div className="menu-item d-flex flex-row dots">
                <span className="content dots-left">Bamboo shoot</span>
                <span className="price ml-auto dots-right">$2</span>
            </div>
            <div className="menu-item d-flex flex-row dots">
                <span className="content dots-left">Spicy chili oil</span>
                <span className="price ml-auto dots-right">$2</span>
            </div>
            <div className="menu-item d-flex flex-row dots">
                <span className="content dots-left">Seasoned boiled egg</span>
                <span className="price ml-auto dots-right">$2</span>
            </div>
            <div className="menu-item d-flex flex-row dots">
                <span className="content dots-left">Poached egg</span>
                <span className="price ml-auto dots-right">$2</span>
            </div>
            <div className="menu-item d-flex flex-row dots">
                <span className="content dots-left">Crunchy onion</span>
                <span className="price ml-auto dots-right">$2</span>
            </div>
          </div>

          <div className="menu-item d-flex flex-column mb-2 dots">
            <span className="content dots-left">Okonomiyaki</span>
            <span className="price ml-auto dots-right">$12</span>
            <div className="item-detail">(Japanese Style Pancake)</div>
            <div className="item-detail">Bacon, cabbage, crunchy tempura flake, egg, scallion, original teriyaki sauce, mayonnaise, dry seaweed, bonito flake, flour</div>
          </div>

          <div className="menu-item d-flex flex-column mb-2 dots">
            <span className="content dots-left">Kobe Beef Burger</span>
            <span className="price ml-auto dots-right">$12</span>
            <div className="item-detail">Kobe ground beef, romaine lettuce, cheese, tomato, scallion, original bbq sauce, spicy mayonnaise</div>
          </div>*/}

        </div>
    )
  }
}