import React, { Component } from "react";
import { Element } from "react-scroll";
import "./resources/styles.css";
import Header from "./component/header/Header";
import Featured from "./component/featured";
import VenueInfo from "./component/venueInfo";
import Highlights from "./component/highlights";
import Discount from "./component/Discount";
import Location from "./component/location";
import Footer from "./component/footer";
import Items from "./component/Items";
import AudioPlayer from "./component/AudioPlayer";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Element name="startTime">
          <Featured />
        </Element>
        <Element name="venue">
          <VenueInfo />
        </Element>
        <Element name="highlights">
          <Highlights />
        </Element>
        <Element name="Discount">
          <Discount />
        </Element>
        <Element name="Items">
          <Items />
        </Element>
        <Element name="location">
          <Location />
        </Element>
        <Footer />
        <AudioPlayer /> 
      </div>
    );
  }
}

export default App;
