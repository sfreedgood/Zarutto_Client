import React from "react"
import "../../menu.css"

const AppetizerContent = () => {

    return(
        <div className="menu-section-container">
            <div className="menu-head d-flex flex-row mb-0">
              <span className="">Gyoza</span>
              <span className="font-weight-light">(6pcs)</span>
            </div>

            <div className="menu-item d-flex flex-row dots">
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
            </div>
        </div>
    )
}

export default AppetizerContent;
