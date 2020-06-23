import React from "react";
import {Link} from "react-router-dom"
import Like from "../Components/Common/like";

const MoviesTable = ({movies, onDelete, onToggleLike, onSort}) => {
  return (
    <table className="table table-hover">
      <thead>
        <tr>
          <th onClick={()=>onSort('title')} scope="col">Title</th>
          <th onClick={()=>onSort('genre.name')} scope="col">Genre</th>
          <th onClick={()=>onSort('numberInStock')} scope="col">Stock</th>
          <th onClick={()=>onSort('dailyRentalRate')} scope="col">Rate</th>
          <th scope="col"></th>
          <th scope="col"></th>
        </tr>
      </thead>
      <tbody>
        {movies.map((movie) => (
          <tr key={movie._id}>
            <td style={{cursor:'pointer'}} className="text-primary" ><Link to={`/movies/${movie._id}`}>{movie.title}</Link></td>
            <td>{movie.genre.name}</td>
            <td>{movie.numberInStock}</td>
            <td>{movie.dailyRentalRate}</td>
            <td>
              <Like
                liked={movie.liked}
                onToggleLike={() => onToggleLike(movie)}
              />
            </td>
            <td>
              <p
                style={{cursor: 'pointer'}}
                onClick={() => onDelete(movie)}
                className="text-danger"
              >
                Delete
              </p>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default MoviesTable;
