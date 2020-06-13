import React, {Component, Fragment} from 'react'
import { getMovies } from '../services/fakeMovieService'

class Movies extends Component {
    state = {
        movies : getMovies()
    }
    handleDelete = (id) => {
        const action = this.state.movies.filter(movie => id._id !== movie._id)
        this.setState({movies : action})
    }
    render(){
        const {length} = this.state.movies
        if(length === 0) return <p>There are no movies in the database.</p>
        return(
            <Fragment>
                <p>Showing {length} movies in the database.</p>
                <table className="table table-bordered">
                    <thead>
                        <tr>
                        <th scope="col">Title</th>
                        <th scope="col">Genre</th>
                        <th scope="col">Stock</th>
                        <th scope="col">Rate</th>
                        <th scope="col"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.movies.map(movie => <tr key={movie._id}>
                            <td>{movie.title}</td>
                            <td>{movie.genre.name}</td>
                            <td>{movie.numberInStock}</td>
                            <td>{movie.dailyRentalRate}</td>
                            <td><p  onClick={()=> this.handleDelete(movie)} className="btn btn-danger text-white">Delete</p></td>
                        </tr>)}
                    </tbody>
                </table>
            </Fragment>
        )
    }
}

export default Movies