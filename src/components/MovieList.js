import React from 'react';
import { connect } from 'react-redux';
import MovieListItem from './MovieListItem';
import MovieFooter from './MovieFooter';
import { connectAdvanced } from 'react-redux';

const MovieList = (props)=> {
    

    return (
        <div className="col">
            <table className="table table-striped table-hover">
                <thead>
                <tr>
                    <th>Title</th>
                    <th>Director</th>
                    <th>Genre</th>
                    <th>Metascore</th>
                    <th></th>
                </tr>
                </thead>

                <tbody>
                    {
                        props.movies.map(movie=><MovieListItem key={movie.id} movie={movie}/>)
                    }
                </tbody>
            </table>
            
            <MovieFooter totalMovies={props.movies.length}/>
        </div>
    );
}

const mapStateToProps = (state) => {
    console.log('here is', state)
    return({
        ...state,
        movies: state.reducer.movies
    })
}

export default connect(mapStateToProps, {})(MovieList);
