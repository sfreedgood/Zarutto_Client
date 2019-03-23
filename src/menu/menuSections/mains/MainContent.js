import React from "react"
import classNames from "classnames"
import "../../menu.css"

const MainContent = () => {

    return(
        <div className="menu-section-container">
            <div className="menu-item d-flex flex-column mb-2 dots">
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
          </div>

        </div>
    )
}

export default MainContent;