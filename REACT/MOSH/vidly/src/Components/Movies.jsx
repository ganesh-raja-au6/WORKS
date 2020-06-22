import React, { Component, Fragment } from "react";
import { getMovies } from "../services/fakeMovieService";
import { getGenres } from "../services/fakeGenreService";

import Like from "../Components/Common/like";
import Pagination from "../Components/Common/Pagination";
import Sorting from "../Components/Common/listGroup";

import Paginate from "../Utils/paginate";

class Movies extends Component {
  state = {
    movies: [],
    genres: [],
    currentPage: 1,
    pageSize: 4,
    currentGenre : null
  };
  componentDidMount() {
      const genres = [{name : "All Genres"},...getGenres()]
      this.setState({movies : getMovies(), genres})
  }
  handleDelete = (id) => {
    const action = this.state.movies.filter((movie) => id._id !== movie._id);
    this.setState({ movies: action });
  };
  handleToggleLike = (movie) => {
    const movies = [...this.state.movies];
    const index = movies.indexOf(movie);
    movies[index] = { ...movie };
    movies[index].liked = !movies[index].liked;
    this.setState({ movies });
  };
  handlePageChange = (page) => {
    this.setState({ currentPage: page });
  };
  handleGenre = (genre) => {
    this.setState({currentGenre : genre, currentPage : 1})
  };
  render() {
    const { length } = this.state.movies;
    const { pageSize, currentPage, genres, currentGenre } = this.state;
    if (length === 0) return <p>There are no movies in the database.</p>;
    const filtered = currentGenre !== null && currentGenre._id ? this.state.movies.filter(movie => movie.genre._id === currentGenre._id) : this.state.movies
    const movies = Paginate(filtered, pageSize, currentPage);
    return (
      <Fragment>
        <div className="row">
          <div className="col-3">
            <Sorting
              genres={genres}
              currentGenre = {currentGenre}
              onGenreChange={this.handleGenre}
            />
          </div>
          <div className="col">
            <p>Showing {filtered.length} movies in the database.</p>
            <table className="table table-hover">
              <thead>
                <tr>
                  <th scope="col">Title</th>
                  <th scope="col">Genre</th>
                  <th scope="col">Stock</th>
                  <th scope="col">Rate</th>
                  <th scope="col"></th>
                  <th scope="col"></th>
                </tr>
              </thead>
              <tbody>
                {movies.map((movie) => (
                  <tr key={movie._id}>
                    <td>{movie.title}</td>
                    <td>{movie.genre.name}</td>
                    <td>{movie.numberInStock}</td>
                    <td>{movie.dailyRentalRate}</td>
                    <td>
                      <Like
                        liked={movie.liked}
                        onToggleLike={() => this.handleToggleLike(movie)}
                      />
                    </td>
                    <td>
                      <p
                        onClick={() => this.handleDelete(movie)}
                        className="btn btn-danger text-white"
                      >
                        Delete
                      </p>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <Pagination
              itemsCount={filtered.length}
              currentPage={currentPage}
              pageSize={pageSize}
              onPageChange={this.handlePageChange}
            />
          </div>
        </div>
      </Fragment>
    );
  }
}

export default Movies;
