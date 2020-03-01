import React from "react";
import "./Form.css";

class Form extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      description: ""
    };
  }

  handleInput = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  render() {
    return (
      <div className="form-container">
        <input
          name="name"
          onChange={this.handleInput}
          type="text"
          placeholder="Name of Cow..."
        />
        <input
          name="description"
          onChange={this.handleInput}
          type="text"
          placeholder="Cow Description..."
        />
        <button>Add Cow</button>
      </div>
    );
  }
}

export default Form;
