import React, { Component } from "react";

// React Bootstrap
import { Container, Row, Col } from "react-bootstrap";

// Fontawesome
import {
  faList,
  faBookReader,
  faCheck
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// Component
import Book from "./Book/Book";

class Backlog extends Component {
  render() {
    const { books_props } = this.props;

    const listBooks = books_props.map(book => (
      <Book key={book.id} book={book} />
    ));

    return (
      <Container>
        <Row>
          <Col md={4}>
            <div className="card text-center mb-2">
              <div className="card-header bg-secondary text-white">
                <h3>
                  <FontAwesomeIcon icon={faList} className="fa-fw" />
                  List
                </h3>
              </div>
            </div>
            {listBooks}
            {
              //Here
            }
          </Col>
          <Col md={4}>
            <div className="card text-center mb-2">
              <div className="card-header bg-primary text-white">
                <h3>
                  <FontAwesomeIcon icon={faBookReader} className="fa-fw" />
                  Reading...
                </h3>
              </div>
            </div>
            <Book />
          </Col>
          <Col md={4}>
            <div className="card text-center mb-2">
              <div className="card-header bg-success text-white">
                <h3>
                  <FontAwesomeIcon icon={faCheck} className="fa-fw" />
                  Done
                </h3>
              </div>
            </div>
            <Book />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Backlog;
