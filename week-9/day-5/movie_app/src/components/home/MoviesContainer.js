import { Component } from 'react'
import { connect } from 'react-redux';
import MovieCard from './MovieCard';

export class MoviesContainer extends Component {
    render () {
        const { movie } = this.props;
        const content = '';

        content = movie.Response === 'True' ?
        movie.Search.map((movie, index) =>(
            <MovieCard key={index} movie={movie}/>
        ))
        :null;
        return <div className='row'>{content}</div>;
    }
}

const mapStateToProps = state => ({
    movies: state.movies.movies
})

export default connect(mapStateToProps)(MoviesContainer);