import React, { Component } from 'react';
import { getMovies, deleteMovie } from './../services/fakeMovieService.js';
import Like from './../components/like.jsx';
import Pagination from './../components/pagination.jsx';

class Movies extends Component {
    state = {
        movies: getMovies(),
        currentPage: 0
    }
    constructor() {
        super();
    }

    render() {
        return <div>
            {this.state.movies.length === 0 && 'No Movies!'}
            {this.renderMovies()}
        </div>
    }

    renderMovies() {
        const { length: count } = this.state.movies;

        if (count) {
            return <React.Fragment>
                <div>Showing {count} movies in the database</div>
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">Title</th>
                            <th scope="col">genre</th>
                            <th scope="col">Stock</th>
                            <th scope="col">Rate</th>
                            <th scope="col">  </th>
                            <th scope="col">  </th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.movies.map((movie) => {
                            return <tr key={movie._id}>
                                <td>{movie.title}</td>
                                <td>{movie.genre.name}</td>
                                <td>{movie.numberInStock}</td>
                                <td>{movie.dailyRentalRate}</td>
                                <td> <Like liked={movie.liked} onClick={this.handleClick} id={movie._id} /> </td>
                                <td><button type="button" className="btn btn-danger" onClick={() => this.handelDeleteMovie(movie._id)}>Delete</button></td>

                            </tr>
                        })}

                    </tbody>
                </table>
                <Pagination 
                    itemsCount={count} 
                    pageSize={4} 
                    currentPage={this.state.currentPage}
                    onPageChange={this.handelPageChange} />

            </React.Fragment>
        }

        }

        handelPageChange = (index) => {
            console.log("Index", index)
            this.setState({...this.state, currentPage: index})
        }

        getMovies = () => {
            this.setState({...this.setState, movies: getMovies()})
            return getMovies();
        }

        handelDeleteMovie = (movieId) => {
            deleteMovie(movieId);
            this.getMovies();
        }

        handleClick = (movieId) => {
            let index = this.state.movies.findIndex(movie => movie._id == movieId);
            let { movies } = this.state;
            movies[index].liked = !movies[index].liked;
            this.setState({movies});
        }
    }

    export default Movies;