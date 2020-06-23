import React, { Component, Fragment } from "react";
import _ from "lodash";
import { getMovies } from "../services/fakeMovieService";
import { getGenres } from "../services/fakeGenreService";

import Pagination from "../Components/Common/Pagination";
import Sorting from "../Components/Common/listGroup";
import MoviesTable from "./moviesTable";

import Paginate from "../Utils/paginate";

class Movies extends Component {
  state = {
    movies: [],
    genres: [],
    currentPage: 1,
    pageSize: 4,
    currentGenre: null,
    sortColumn: { path: "title", order: "asc" },
  };
  componentDidMount() {
    const genres = [{ _id: "", name: "All Genres" }, ...getGenres()];
    this.setState({ movies: getMovies(), genres });
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
    this.setState({ currentGenre: genre, currentPage: 1 });
  };
  handleSort = (path) => {
    const sortColumn = { ...this.state.sortColumn };
    if (sortColumn.path === path) {
      sortColumn.order = sortColumn.order === "asc" ? "desc" : "asc";
    } else {
      sortColumn.path = path;
      sortColumn.order = "asc";
    }
    this.setState({ sortColumn });
  };
  render() {
    const { length } = this.state.movies;
    const {
      pageSize,
      currentPage,
      genres,
      sortColumn,
      currentGenre,
    } = this.state;
    if (length === 0) return <p>There are no movies in the database.</p>;
    const filtered =
      currentGenre !== null && currentGenre._id
        ? this.state.movies.filter(
            (movie) => movie.genre._id === currentGenre._id
          )
        : this.state.movies;
    const sorted = _.orderBy(filtered, [sortColumn.path], [sortColumn.order]);
    const movies = Paginate(sorted, pageSize, currentPage);
    return (
      <Fragment>
        <div className="row">
          <div className="col-3">
            <Sorting
              genres={genres}
              currentGenre={currentGenre}
              onGenreChange={this.handleGenre}
            />
          </div>
          <div className="col">
            <p>Showing {filtered.length} movies in the database.</p>
            <MoviesTable
              movies={movies}
              onDelete={this.handleDelete}
              onToggleLike={this.handleToggleLike}
              onSort={this.handleSort}
            />
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
