import React, { Component } from 'react';
import Like from './../components/like.jsx';

class MoviesTable extends Component {
    render() { 
        const { movies, onDeleteMovie, onLikeMovie, onSortMovies, sortCol, order } = this.props;
        return ( <table className="table">
        <thead>
            <tr>
                <th style={{cursor: 'pointer'}} onClick={() => onSortMovies("title")} scope="col">Title {this.renderSortIcon('title')}</th>
                <th style={{cursor: 'pointer'}} onClick={() => onSortMovies("genre")} scope="col">genre  {this.renderSortIcon('genre')}</th>
                <th style={{cursor: 'pointer'}} onClick={() => onSortMovies("numberInStock")} scope="col">Stock  {this.renderSortIcon('numberInStock')}</th>
                <th style={{cursor: 'pointer'}} onClick={() => onSortMovies("dailyRentalRate")} scope="col">Rate  {this.renderSortIcon('dailyRentalRate')}</th>
                <th scope="col">  </th>
                <th scope="col">  </th>
            </tr>
        </thead>
        <tbody>
            {movies.map((movie) => {
                return <tr key={movie._id}>
                    <td> {movie.title}</td>
                    <td> {movie.genre.name}</td>
                    <td> {movie.numberInStock}</td>
                    <td> {movie.dailyRentalRate}</td>
                    <td> <Like liked={movie.liked} onClick={() => onLikeMovie(movie._id)} id={movie._id} /> </td>
                    <td><button type="button" className="btn btn-danger" onClick={() => onDeleteMovie(movie._id)}>Delete</button></td>

                </tr>
            })}

        </tbody>
    </table>
     );
    }

    renderSortIcon = (col) => {
        const { sortCol, order } = this.props;
        if(col == sortCol) return order == 'asc'? <i class="fa fa-sort-asc"></i> : <i class="fa fa-sort-desc"></i>


    }
}
 
export default MoviesTable;