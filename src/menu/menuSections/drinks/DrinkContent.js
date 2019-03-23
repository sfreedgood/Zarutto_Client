import React from "react"
import "../../menu.css"

//Commented code is template for bulk-creating items if
//content is is supported format.
//Alternatively hardcode each item indiviually...

// import data from

// const drinkData = data

const DrinkContent = () => {
    //put logic here
    // const displayDrinks = drinkData.map(el => {
    //     return(
    //         <div className="drink-item">
    //             use data from {el} to populate this data
    //         </div>
    //     )
    // })

    return(
        <div className="menu-section-container">
            <div className="menu-head">Draft Beers</div>
            <div className="menu-item d-flex flex-column mb-2 dots">
                <span className="dots-left">Sapporo</span>
                <span className="price ml-auto ml-auto dots-right">$6</span>
            </div>
            <div className="menu-item d-flex flex-column mb-2 dots">
                <span className="dots-left">Asahi</span>
                <span className="price ml-auto ml-auto dots-right">$7</span>
            </div>

            <div className="menu-head">Bottled Beers</div>
            <div className="menu-item d-flex flex-column mb-2 dots">
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
            </div>

            <div className="menu-head">Sake</div>
            <div className="menu-item d-flex flex-column mb-2 dots">
                <span className="dots-left">Daissai</span>
                <span className="price ml-auto ml-auto dots-right">
                    <span className="item-detail">(bottle)</span>
                    <span className="price">$50</span>
                    <span className="item-detail">(glass)</span>
                    <span className="price">$10</span>
                </span>
            </div>
            <div className="menu-item d-flex flex-column mb-2 dots">
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
            </div>

            <div className="menu-head">White Wine</div>
            <div className="menu-item d-flex flex-column mb-2 dots">
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
            </div>

            <div className="menu-head">Red Wine</div>
            <div className="menu-item d-flex flex-column mb-2 dots">
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
            </div>

            <div className="menu-head">
                <span className="dots-left">Soft Drinks</span>
                <span className="content ml-auto ml-auto dots-right">$3.5</span>
            </div>
            <div className="menu-item flex-column mb-2 dots">
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
            </div>
        </div>
    )
}

export default DrinkContent;
