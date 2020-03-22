import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import classnames from "classnames";
import PropTypes from "prop-types";

import { addBook } from "../../actions/backlogAction";

// React Bootstrap
import { Container, Row, Col } from "react-bootstrap";

class AddBook extends Component {
  constructor(props) {
    super(props);

    const { id } = this.props.match.params;

    this.state = {
      bookAuthor: "",
      bookSummary: "",
      bookStatus: "",
      bookPriority: 0,
      genreIdentifier: id,
      errors: {}
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }

  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  onSubmit(e) {
    e.preventDefault();

    const newBook = {
      bookAuthor: this.state.bookAuthor,
      bookSummary: this.state.bookSummary,
      bookStatus: this.state.bookStatus,
      bookPriority: this.state.bookPriority
    };

    this.props.addBook(this.state.genreIdentifier, newBook, this.props.history);
  }

  render() {
    const { id } = this.props.match.params;
    const { errors } = this.state;
    return (
      <Container fluid>
        <Row>
          <Col md={8} className="m-auto">
            <br />
            <br />
            <Link to={`/genreBoard/${id}`} className="btn btn-light">
              Back to List of Genre
            </Link>
            <h4 className="display-4 text-center">Add Book</h4>
            <p className="lead text-center">Book Name + Book Code</p>
            <form onSubmit={this.onSubmit}>
              <div className="form-group">
                <input
                  type="text"
                  className={classnames("form-control form-control-lg", {
                    "is-invalid": errors.bookAuthor
                  })}
                  placeholder="Book Author"
                  name="bookAuthor"
                  value={this.state.bookAuthor}
                  onChange={this.onChange}
                />
                {errors.bookAuthor && (
                  <div className="invalid-feedback">{errors.bookAuthor}</div>
                )}
              </div>
              <div className="form-group">
                <textarea
                  className={classnames("form-control form-control-lg", {
                    "is-invalid": errors.bookSummary
                  })}
                  placeholder="Book Brief Summary (Introduction)"
                  name="bookSummary"
                  value={this.state.bookSummary}
                  onChange={this.onChange}
                ></textarea>
                {errors.bookSummary && (
                  <div className="invalid-feedback">{errors.bookSummary}</div>
                )}
              </div>
              <div className="form-group">
                <select
                  className="form-control form-control-lg"
                  name="bookPriority"
                  value={this.state.bookPriority}
                  onChange={this.onChange}
                >
                  <option value={0}>Select Priority</option>
                  <option value={1}>High</option>
                  <option value={2}>Medium</option>
                  <option value={3}>Low</option>
                </select>
              </div>

              <div className="form-group">
                <select
                  className="form-control form-control-lg"
                  name="bookStatus"
                  value={this.state.bookStatus}
                  onChange={this.onChange}
                >
                  <option value="">Select Status</option>
                  <option value="TO_DO">List On</option>
                  <option value="IN_PROGRESS">Currently Reading</option>
                  <option value="DONE">Done Reading</option>
                </select>
              </div>

              <input type="submit" className="btn btn-primary btn-block mt-4" />
            </form>
          </Col>
        </Row>
      </Container>
    );
  }
}

AddBook.propTypes = {
  addBook: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  errors: state.errors
});

export default connect(mapStateToProps, { addBook })(AddBook);
