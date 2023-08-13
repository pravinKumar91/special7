import React, { Component } from "react";
import ReactGA from "react-ga";
import $ from "jquery";
import "./App.css";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import About from "./Components/About";
import Contact from "./Components/Contact";

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      foo: "bar",
      cakeData: {}
    };

    ReactGA.initialize("UA-110570651-1");
    ReactGA.pageview(window.location.pathname);
  }

  getCakeData() {
    $.ajax({
      url: "./cakeData.json",
      dataType: "json",
      cache: false,
      success: function(data) {
        this.setState({ cakeData: data });
      }.bind(this),
      error: function(xhr, status, err) {
        console.log(err);
        alert(err);
      }
    });
  }

  componentDidMount() {
    this.getCakeData();
  }

  render() {
    return (
      <div className="App">
        <Header data={this.state.cakeData.main} />
        <About data={this.state.cakeData.main} />
        <Contact data={this.state.cakeData.main} />
        <Footer data={this.state.cakeData.main} />
      </div>
    )
  }
}

export default App;
