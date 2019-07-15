import React, { Component } from 'react';
import { getMovies, deleteMovie } from './../services/fakeMovieService.js';
import { getGenres } from './../services/fakeGenreService';
import Pagination from './../components/pagination.jsx';
import MoviesTable from './../components/moviesTable.jsx';

class Movies extends Component {
    state = {
        currentPage: 0,
        movies: [],
        pageSize: 4,
        genres: [],
        genre: 'all', 
        sortCol: 'title', 
        order: 'asc'
    }
    constructor() {
        super();
    }

    render() {
        return <div>
            {this.renderMovies()}
        </div>
    }

    componentDidMount() {
        this.setState({ movies: getMovies(), genres: getGenres() })
    }

    renderMovies() {
        const { pageSize, genre: currentGenre, currentPage } = this.state;
        const { length: moviesCount } = this.state.movies;
        let //movies = this.hadleSortMovies('title');
            movies = this.state.movies.slice(currentPage * pageSize, currentPage * pageSize + pageSize);

        return <React.Fragment>
            <div className="row" style={{ marginTop: "3%" }}>

                <div className="col col-2 mr-5">
                    <div className="card" styles={{ width: "18rem" }}>

                        <ul className="list-group list-group-flush">
                            <li key={-1} className={currentGenre == 'all' ? "list-group-item active " : "list-group-item"} onClick={() => this.filterMovies('all')}>All Genres</li>
                            {this.state.genres.map(genre => <li key={genre._id} className={genre.name == currentGenre ? "list-group-item active " : "list-group-item"} onClick={() => this.filterMovies(genre.name)} >{genre.name}</li>)}
                        </ul>
                    </div>
                </div>
                <div className="col">

                    <div>Showing {moviesCount} movies in the database</div>
                    <MoviesTable 
                        onDeleteMovie={this.handelDeleteMovie} 
                        movies={movies}
                        onLikeMovie={this.handleLikeMovie}
                        onSortMovies={this.hadleSortMovies}
                        sortCol={this.state.sortCol}
                        order={this.state.order} />
                    <Pagination
                        currentPage={this.state.currentPage}
                        onPageChange={this.handelPageChange}
                        pageSize={pageSize}
                        count={moviesCount} />
                </div>

            </div>
        </React.Fragment>


    }

    filterMovies(genre) {
        let movies;
        if (genre === 'all')
            movies = getMovies();
        else {
            movies = getMovies().filter(({ genre: moviesGenre }) => moviesGenre.name == genre)
        }
        this.setState({ movies, genre, currentPage: 0 })

    }



    handelPageChange = (index) => {
        this.setState({ currentPage: index });
    }

    getMovies = () => {
        this.setState({ movies: getMovies() })
    }

    handelDeleteMovie = (movieId) => {
        deleteMovie(movieId);
        this.getMovies();
    }

    handleLikeMovie = (movieId) => {
        let index = this.state.movies.findIndex(movie => movie._id == movieId);
        let { movies } = this.state;
        movies[index].liked = !movies[index].liked;
        this.setState({ movies });
    }



    hadleSortMovies = (attribute) => {
        let { sortCol, order, movies } = this.state;
        if(sortCol == attribute)
            order = (order == 'desc') ? 'asc' : 'desc';
        else order = 'asc' 

        movies.sort((movie1, movie2) => {
            let value1 = movie1[attribute], value2 = movie2[attribute]; 
            if(attribute == 'genre') {
                value1 = movie1[attribute]['name'];
                value2 = movie2[attribute]['name']
            }
            if( value1 == value2 )  
                return 0;
                
            if(order == 'asc') 
                return value1 < value2 ? -1 : 1;
            
            return value1 > value2 ? -1 : 1;
        })
        this.setState({movies, order, sortCol: attribute})
    }
}

export default Movies;