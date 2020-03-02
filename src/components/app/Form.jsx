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
      <form className="form-container">
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
        <button
          onClick={e =>
            this.props.handleAddCow(e, this.state.name, this.state.description)
          }
        >
          Add Cow
        </button>
      </form>
    );
  }
}

export default Form;
