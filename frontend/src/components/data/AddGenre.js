import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import classnames from "classnames";

// Actions
import { createGenre } from "../actions/genreActions";

class AddGenre extends Component {
  constructor() {
    super();

    this.state = {
      genreName: "",
      genreIdentifier: "",
      genreDescription: "",
      errors: {}
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  // Life Cycle Hooks
  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({
        errors: nextProps.errors
      });
    }
  }

  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  onSubmit(e) {
    e.preventDefault();
    const newGenre = {
      genreName: this.state.genreName,
      genreIdentifier: this.state.genreIdentifier,
      genreDescription: this.state.genreDescription
    };

    this.props.createGenre(newGenre, this.props.history);
  }

  render() {
    const { errors } = this.state;

    return (
      <div>
        <div className="project">
          <div className="container">
            <div className="row">
              <div className="col-md-8 m-auto">
                <h5 className="display-4 text-center">Add Book Genre</h5>
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
                      className={classnames("form-control form-control-lg ", {
                        "is-invalid": errors.genreIdentifier
                      })}
                      placeholder="Unique Genre ID"
                      name="genreIdentifier"
                      value={this.state.genreIdentifier}
                      onChange={this.onChange}
                    />
                    {errors.genreIdentifier && (
                      <div className="invalid-feedback">
                        {errors.genreIdentifier}
                      </div>
                    )}
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
      </div>
    );
  }
}

AddGenre.propTypes = {
  createGenre: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStatetoProps = state => ({
  errors: state.errors
});

export default connect(mapStatetoProps, { createGenre })(AddGenre);
