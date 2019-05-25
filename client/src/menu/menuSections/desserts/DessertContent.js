import React from "react"
import "../../menu.css"

const DessertContent = () => {

    return(
        <div className="menu-section-container">
            <div className="menu-item d-flex flex-column mb-2 dots">
                <span className="content dots-left">Almond Tofu Pudding</span>
                <span className="price ml-auto dots-right">$7</span>
            </div>

            <div className="menu-item d-flex flex-column mb-2 dots">
                <span className="content dots-left">Mochi Green Tea or Vanilla</span>
                <span className="price ml-auto dots-right">$5</span>
            </div>

            <div className="menu-item d-flex flex-column mb-2 dots">
                <span className="content dots-left">Yuzu Sherbert</span>
                <span className="price ml-auto dots-right">$5</span>
            </div>
        </div>
    )
}

export default DessertContent;