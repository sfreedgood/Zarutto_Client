import React, { Component, Fragment } from "react";
import "./App.css";
import Splash from "./splash/Splash";
import About from "./about/About";
import Menu from "./menu/Menu";
import Gallery from "./gallery/Gallery";
import Contact from "./contact/contact";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";

import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    Container,
    Row,
    Col,
    Jumbotron,
    Button
} from 'reactstrap';

class App extends Component {
  render() {
    return (
      <Fragment>
        <Header className="header" />
        <div className="App">

          <Splash />
          <About />
          <Menu />
          <Gallery />
          <Contact />
          <Footer />
        </div>
      </Fragment>
    );
  }
}

export default App;
