import { Component } from "react";

import HomePage from "../../pages/HomePage/HomePage";
import CoffeePage from "../../pages/CoffeePage/CoffeePage";


import './app.scss'

class App extends Component {
  render() {
    return (
      <>
        <HomePage/>
        <CoffeePage/>
      </>
    );
  }
}

export default App;
