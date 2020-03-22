import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { getBackLog } from "../actions/backlogAction";

// React Bootstrap
import { Container } from "react-bootstrap";

// Fontawesome
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// Components
import Backlog from "./Backlog";

class GenreBoard extends Component {
  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.getBackLog(id);
  }

  render() {
    const { id } = this.props.match.params;
    const { books } = this.props.backlog;
    return (
      <Container>
        <br />
        <br />
        <Link to={`/addBook/${id}`} className="btn btn-warning mb-3">
          <FontAwesomeIcon icon={faPlus} className="fa-fw" />
          Create Book?
        </Link>
        <br />
        <hr />
        <Backlog books_props={books} />
      </Container>
    );
  }
}

GenreBoard.propTypes = {
  getBackLog: PropTypes.func.isRequired,
  backlog: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  backlog: state.backlog
});

export default connect(mapStateToProps, { getBackLog })(GenreBoard);
