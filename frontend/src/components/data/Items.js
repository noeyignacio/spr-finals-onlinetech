import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { deleteGenre } from "../actions/genreActions";

// React Bootstrap
import { Container, Card, Row, Col } from "react-bootstrap";

// Fontawesome
import { faBook, faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class Items extends Component {
  onDeleteClick = id => {
    this.props.deleteGenre(id);
  };

  render() {
    const { genre } = this.props;
    return (
      <Container>
        <Card className="card-body bg-light mb-3">
          <Row>
            <Col md={2}>
              <span className="mx-auto"> {genre.genreIdentifier}</span>
            </Col>
            <Col lg={6} md={4} className="col-8">
              <h3>{genre.genreName}</h3>
              <p>{genre.genreDescription}</p>
            </Col>
            <Col md={4} className="d-none d-lg-block">
              <ul className="list-group">
                <a href="#">
                  <li className="list-group-item board">
                    <span className="text-info">
                      <FontAwesomeIcon icon={faBook} className="fa-fw" />
                      Books
                    </span>
                  </li>
                </a>
                <Link to={`/updateGenre/${genre.genreIdentifier}`}>
                  <li className="list-group-item update">
                    <span className="text-success">
                      <FontAwesomeIcon icon={faEdit} className="fa-fw" />
                      Update Project Info
                    </span>
                  </li>
                </Link>
                <li
                  className="list-group-item delete"
                  onClick={this.onDeleteClick.bind(this, genre.genreIdentifier)}
                >
                  <span className="text-danger">
                    <FontAwesomeIcon icon={faTrash} className="fa-fw" />
                    Delete Project
                  </span>
                </li>
              </ul>
            </Col>
          </Row>
        </Card>
      </Container>
    );
  }
}

Items.propTypes = {
  deleteGenre: PropTypes.func.isRequired
};

export default connect(null, { deleteGenre })(Items);
