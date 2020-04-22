import React, { Component } from "react";
import { connect } from "react-redux";
import { createCard } from "../../store/actions/cardActions";

interface ICreateFlashCardProps {
  props?: any;
}

interface ICreateFlashCardState {}

type Props = any;
class CreateFlashCard extends Component<Props, ICreateFlashCardState> {
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
    this.props.createCard(this.state);
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

const mapDispatchToProps = (dispatch: any) => {
  return {
    createCard: (card: any) => dispatch(createCard(card)),
  };
};

export default connect(null, mapDispatchToProps)(CreateFlashCard);
