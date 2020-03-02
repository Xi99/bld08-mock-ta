import React from "react";
import "./App.css";

import CowTiles from "./CowTiles.jsx";
import Form from "./Form.jsx";

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

  handleAddCow = (e, name, description) => {
    e.preventDefault();

    const cow = {
      cow_name: name,
      cow_description: description
    };

    fetch("http://localhost:8080/cows", {
      method: "post",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(cow)
    }).then(response => response.json());
    // .catch(error => console.log("Error: ", error))
    // .then(response => console.log("Success: ", response))
    // .then(data => console.log(data));
    // .then(data => this.setState({ cows: data }));
  };

  render() {
    return (
      <div className="app">
        <header>
          <h1>Cow List</h1>
        </header>

        <div className="cow-tiles">
          {this.state.cows.map(cow => (
            <CowTiles cow={cow} key={cow.cow_id} />
          ))}
        </div>

        <div className="forms">
          <Form handleAddCow={this.handleAddCow} />
          {/* <button onClick={() => this.handleAddCow}>Top Level Add Cow</button> */}
        </div>
      </div>
    );
  }
}

export default App;
