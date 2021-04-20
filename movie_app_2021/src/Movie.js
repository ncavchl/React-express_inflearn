import React from "react";
import Proptypes from "prop-types";

function Movie({id, year, title, summary, poster}) {
    return (
    <div className="movie">
        <h3 className="movie__title">{title}</h3>
        <h5 className="movie__year">{year}</h5>
        <p className="movie__summary">{summary}</p>
        {id} {poster}
    </div>
    );
};

Movie.propTypes = {
    id : Proptypes.number.isRequired,
    // year: Proptypes.number.isRequired,
    title : Proptypes.string.isRequired,
    summary : Proptypes.string.isRequired,
    poster : Proptypes.string.isRequired,
};

export default Movie;