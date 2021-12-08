import React from 'react';
import { connect } from 'react-redux';
import { removeFavorite } from '../actions/favoritesActions';
import { Link } from 'react-router-dom';


const FavoriteMovieList = (props) => {
    const favorites = props.favorites
    
    const handleRemoval = (id) => {
        props.removeFavorite(id)
    }

    return (<div className="col-xs savedContainer">
        <h5>Favorite Movies</h5>
        {
            favorites.map(movie=>{
                return <div key={movie.id}>
                    <Link className="btn btn-light savedButton" to={`/movies/${movie.id}`}>
                        {movie.title}
                        <span><span class="material-icons" onClick={()=> handleRemoval(movie.id)}>remove_circle</span></span>
                    </Link> 
                </div>
            })
        }
    </div>);
}


const mapStateToProps = (state) => {
    console.log(state)
    return({
        ...state,
        favorites: state.favoritesReducer.favorites
    })
}

export default connect(mapStateToProps, {removeFavorite})(FavoriteMovieList);