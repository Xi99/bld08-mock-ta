import React from "react";
import "./App.css";

import CowTiles from "./CowTiles.jsx";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      cows: []
    };
  }

  componentDidMount() {
    fetch("http://localhost:8080/cows")
      .then(response => response.json())
      // .then(data => console.log(data));
      .then(data => this.setState({ cows: data }));
  }
  render() {
    return (
      <div className="app">
        <header>
          <h1>Cow List</h1>
        </header>

        <div className="cow-tiles">
          <CowTiles cows={this.state.cows} />
        </div>

        <div className="forms">forms go here</div>
      </div>
    );
  }
}

export default App;
