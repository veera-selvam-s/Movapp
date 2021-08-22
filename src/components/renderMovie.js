import React from 'react';
import Movie from './movie';

const RenderMovie =(props)=>{
    return(
        <div className="movie-container">
          
           {props.movies.length >0 && props.movies.map((movie)=>
            <Movie key={movie.id} {...movie} />
          )}
          
        </div>
    );
}
export default RenderMovie;