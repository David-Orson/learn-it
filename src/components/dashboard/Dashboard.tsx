import React, { Component } from "react";
import Notifications from "./Notifications";
import CardList from "../flash cards/CardList";
class Dashboard extends Component {
  render() {
    return (
      <div className="dashboard container-spaced">
        <div className="row">
          <div className="col">
            <Notifications />
          </div>
          <div className="col">
            <CardList />
          </div>
        </div>
      </div>
    );
  }
}

export default Dashboard;
