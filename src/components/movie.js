import React,{Component} from 'react';
const IMG_API ="https://image.tmdb.org/t/p/w1280";

class Movie extends Component{
    constructor(props){
        super(props);
    }
    render(){
        var title=this.props.title;
        var poster_path=this.props.poster_path;
        var overview = this.props.overview;
        var vote_average=this.props.vote_average;


        return(
            <div className="movie">
                <img src={IMG_API+poster_path} alt={title}/>
                <div className="movie-info">
                    <h3>{title}</h3>
                    <span>{vote_average}</span>
                </div>
                <div className="movie-over">
                    <h2>Overview:</h2>
                    <p>{overview}</p>
                </div>
            </div>
        )
    }
}

export default Movie;