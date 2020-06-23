import React, { Fragment } from "react";
import {Link} from "react-router-dom"
const MoviesForm = ({ match, history }) => {
  return (
    <Fragment>
      <h1>Movie Id :- , {match.params.id} </h1>
      <button className="btn btn-primary" onClick={() => history.push('/movies')}>Save</button>
    </Fragment>
  );
};

export default MoviesForm;
