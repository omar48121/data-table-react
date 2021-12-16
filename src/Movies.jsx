import { Component } from 'react';
import { getMovies } from './services/fakeMovieService';

class Movies extends Component {
    state = {
        movies: getMovies(),
    }
    handleDelete = movieID => {
        const movies = this.state.movies.filter(m => m._id !== movieID);
        this.setState( { movies } );
    }

    render() {
        const { length: moviesCount } = this.state.movies;

        if (moviesCount === 0) return <h3 className='my-4'>There are no movies</h3>;

        return <>
            <h3 className='my-4'>Showing { moviesCount } movies in the database</h3>
            <table className='table'>
                <thead>
                    <tr>
                        <th scope="col">Title</th>
                        <th scope="col">Genre</th>
                        <th scope="col">Stock</th>
                        <th scope="col">Rate</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    { this.state.movies.map(x => {
                        return (
                        <tr key={x._id}>
                            <th>{x.title}</th>
                            <td>{x.genre.name}</td>
                            <td>{x.numberInStock}</td>
                            <td>{x.dailyRentalRate}</td>
                            <td><button onClick={() => this.handleDelete(x._id) } className='btn btn-sm btn-danger'>Delete</button></td>
                        </tr> 
                    )
                    }) }
                </tbody>
            </table>
        </>
    }
}

export default Movies;