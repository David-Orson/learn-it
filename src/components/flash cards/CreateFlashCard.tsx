import React, { Component } from "react";

class CreateFlashCard extends Component {
  state = {
    title: "",
    content: "",
  };

  handleChange = (e: any) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };

  handleSubmit = (e: any) => {
    e.preventDefault();
    console.log(this.state);
  };

  render() {
    return (
      <div className="container-center">
        <form onSubmit={this.handleSubmit}>
          <h5>Sign In</h5>
          <div className="input-field">
            <label htmlFor="title">Title</label>
            <input type="text" id="title" onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <label htmlFor="content">Card Content</label>
            <textarea
              className="text-area"
              id="content"
              onChange={this.handleChange}
            ></textarea>
          </div>
          <div className="input-field">
            <button className="btn">CREATE</button>
          </div>
        </form>
      </div>
    );
  }
}

export default CreateFlashCard;
