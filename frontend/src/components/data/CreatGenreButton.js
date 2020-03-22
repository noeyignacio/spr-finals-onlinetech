import React from "react";

import { Link } from "react-router-dom";

const CreatGenreButton = () => {
  return (
    <React.Fragment>
      <Link
        to="/addGenre"
        href="ProjectForm.html"
        className="btn btn-lg btn-success"
      >
        New Genre of Books?
      </Link>
    </React.Fragment>
  );
};

export default CreatGenreButton;
