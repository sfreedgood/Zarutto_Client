import React from "react"
import DrinkContent from "./DrinkContent"
// import DrinkPrices from "./DrinkPrices"
import "../../menu.css"

const Drinks = () => {

    return(
        <div className="menu-section-container">
            <DrinkContent/>
            {/* <DrinkPrices/> */}
        </div>
    )
}

export default Drinks