import React, { Component } from "react";
import Notifications from "./Notifications";
import CardList from "../flash cards/CardList";
import { connect } from "react-redux";

interface IDashboardProps {
  props?: any;
}

interface IDashboardState {}

type Props = any;
class Dashboard extends Component<Props, IDashboardState> {
  render() {
    const { cards } = this.props;
    return (
      <div className="dashboard container-spaced">
        <div className="row">
          <div className="col">
            <Notifications />
          </div>
          <div className="col">
            <CardList cards={cards} />
          </div>
        </div>
      </div>
    );
  }
}

interface LinkStateProp {
  cards: any;
}

const mapStateToProps = (state: any) => {
  return {
    cards: state.card.cards,
  };
};

export default connect(mapStateToProps)(Dashboard);
