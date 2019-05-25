import React from "react"
import DessertContent from "./DessertContent"
// import DessertPrices from "./DessertPrices"
import "../../menu.css"

const Desserts = () => {

    return(
        <div className="menu-section-container">
            <DessertContent/>
            {/* <DessertPrices/> */}
        </div>
    )
}

export default Desserts