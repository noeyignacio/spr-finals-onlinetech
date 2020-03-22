import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { getGenres } from "../components/actions/genreActions";

// React Bootstrap
import { Container, Row, Col } from "react-bootstrap";

// Components
import Items from "./data/Items";
import CreatGenreButton from "./data/CreatGenreButton";

class Dashboard extends Component {
  componentDidMount() {
    this.props.getGenres();
  }

  render() {
    const { genres } = this.props.genre;

    return (
      <div>
        <Container>
          <Row>
            <Col className="col-md-12">
              <h1 className="display-4 text-center">My Books</h1>
              <br />
              <CreatGenreButton />
              <br />
              <hr />
              {genres.map(genre => (
                <Items key={genre.id} genre={genre} />
              ))}
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

Dashboard.propTypes = {
  genre: PropTypes.object.isRequired,
  getGenres: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  genre: state.genre
});

export default connect(mapStateToProps, { getGenres })(Dashboard);
