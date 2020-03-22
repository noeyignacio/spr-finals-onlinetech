import React, { Component } from "react";

class Book extends Component {
  render() {
    const { listBooks } = this.props;
    return (
      <div className="card mb-1 bg-light">
        <div className="card-header text-primary">ID: -- Priority:</div>
        <div className="card-body bg-light">
          <h5 className="card-title"></h5>
          <p className="card-text text-truncate "></p>
          <a href="" className="btn btn-info">
            View / Update
          </a>

          <button className="btn btn-danger ml-4">Delete</button>
        </div>
      </div>
    );
  }
}

export default Book;
