import React from 'react';
import Movie from './movie';

const RenderMovie =(props)=>{
    console.log(props);
    const renderThis = props.movies.map((movie)=>{
        return(
            <Movie key={movie.id} {...movie} />
        );
        
    });
    return(
        <div className="movie-container">
            {renderThis}
        </div>
    );
}
export default RenderMovie;