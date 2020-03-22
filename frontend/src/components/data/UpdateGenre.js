import React, { Component } from "react";
import { getGenre, createGenre } from "../actions/genreActions";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import classnames from "classnames";

class UpdateGenre extends Component {
  constructor() {
    super();

    this.state = {
      id: "",
      genreName: "",
      genreIdentifier: "",
      genreDescription: "",
      errors: {}
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }

    const {
      id,
      genreName,
      genreIdentifier,
      genreDescription
    } = nextProps.genre;

    this.setState({
      id,
      genreName,
      genreIdentifier,
      genreDescription
    });
  }

  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.getGenre(id, this.props.history);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();

    const UpdateGenre = {
      id: this.state.id,
      genreName: this.state.genreName,
      genreIdentifier: this.state.genreIdentifier,
      genreDescription: this.state.genreDescription
    };

    this.props.createGenre(UpdateGenre, this.props.history);
  }

  render() {
    const { errors } = this.state;

    return (
      <div className="project">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <h5 className="display-4 text-center">Update Book Genre</h5>
              <hr />
              <form onSubmit={this.onSubmit}>
                <div className="form-group">
                  <input
                    type="text"
                    className={classnames("form-control form-control-lg ", {
                      "is-invalid": errors.genreName
                    })}
                    placeholder="Genre Name"
                    name="genreName"
                    value={this.state.genreName}
                    onChange={this.onChange}
                  />
                  {errors.genreName && (
                    <div className="invalid-feedback">{errors.genreName}</div>
                  )}
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control form-control-lg"
                    placeholder="Unique Genre ID"
                    name="genreIdentifier"
                    value={this.state.genreIdentifier}
                    onChange={this.onChange}
                    disabled
                  />
                </div>

                <div className="form-group">
                  <textarea
                    className={classnames("form-control form-control-lg ", {
                      "is-invalid": errors.genreDescription
                    })}
                    placeholder="Genre Description"
                    name="genreDescription"
                    value={this.state.genreDescription}
                    onChange={this.onChange}
                  ></textarea>
                  {errors.genreDescription && (
                    <div className="invalid-feedback">
                      {errors.genreDescription}
                    </div>
                  )}
                </div>

                <input
                  type="submit"
                  className="btn btn-primary btn-block mt-4"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

UpdateGenre.propTypes = {
  getGenre: PropTypes.func.isRequired,
  createGenre: PropTypes.func.isRequired,
  genre: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  genre: state.genre.genre,
  errors: state.errors
});

export default connect(mapStateToProps, { getGenre, createGenre })(UpdateGenre);
