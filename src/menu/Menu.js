import React, { Component } from "react"
import Drinks from "./menuSections/drinks/Drinks"
import Appetizers from "./menuSections/appetizers/Appetizers"
import Mains from "./menuSections/mains/Mains"
import Desserts from "./menuSections/desserts/Desserts"

class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            drinks: false,
            appetizers: false,
            mains: false,
            desserts: false
        }
    }

    onClick = (e) => {
        const activeMenu = e.currentTarget.innerHTML.toLowerCase()
        if (this.state[activeMenu]) {
            this.setState({
                [activeMenu]: false
            })
        } else {
            this.setState({
                [activeMenu]: true
            })
        }
    }

    render() {
        return (
            <div id="menu">
                <h1>Menu</h1>

                <div className="appetizer-banner menu-cat d-flex align-items-end"
                     name="appetizers"
                     onClick={this.onClick}>
                     Appetizers
                </div>
                {this.state.appetizers && <Appetizers/>}
                <div className="main-banner menu-cat d-flex align-items-end"
                     name="mains"
                     onClick={this.onClick}>
                     Mains
                </div>
                {this.state.mains && <Mains/>}
                <div className="dessert-banner menu-cat d-flex align-items-end"
                     name="desserts"
                     onClick={this.onClick}>
                     Desserts
                </div>
                {this.state.desserts && <Desserts/>}
                <div className="drink-banner menu-cat d-flex align-items-end"
                     name="drinks"
                     onClick={this.onClick}>
                     Drinks
                </div>
                {this.state.drinks && <Drinks/>}
            </div>
        );
    }
}

export default Menu;
