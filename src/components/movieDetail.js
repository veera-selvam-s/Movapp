import React from 'react';
import {Link} from 'react-router-dom';
const IMG_API ="https://image.tmdb.org/t/p/w1280";

const MovieDetail = (props) => {
    console.log(props);
    const {poster_path,backdrop_path,original_language,title,overview,release_date,vote_average} = props.location.state.movie;
    return(
        // <h1 style={{color:"black"}}>Movie detail component</h1>
        <div className="container">
            <div className="row">
                <p>&nbsp;</p>
            </div>
            <div className="row justify-content-evenly ">
                <div className="col col-sm-4 col-md-4 col-lg-4" id="flex">
                    <img id="delimg" src={IMG_API+poster_path} alt={title} />
                </div>
                <div className="col col-md-1 col-lg-1 col-sm-1">
                    <p>&nbsp;</p>
                </div>
                <div className="col">
                    <div className="row">
                        <h1 style={{color:'black', fontWeight:'600'}}>{title}</h1>
                    </div>
                    <div className="row">
                        <h5>{overview}</h5>
                    </div>
                    <div className = "row">
                        <h5 style={{color:"yellow"}}><bold style={{color:'black'}} >Language :</bold> {original_language}</h5>
                    </div>
                    <div className = "row">
                        <h5 style={{color:"yellow"}}><bold style={{color:'black'}} >Release date :</bold> {release_date}</h5>
                    </div>
                    <div className = "row">
                        <h5 style={{color:"yellow"}}><bold style={{color:'black'}} >Vote Average :</bold> {vote_average}</h5>
                    </div>
                    <div className="row justify-content-evenly">
                        <div className="col col-12 justify-content-md-center">
                            <img id="drop" src={IMG_API+backdrop_path} alt={title} />
                        </div>
                    
                    </div>
                    <div className="row" style={{paddingTop:'10px'}}>
                        <div className="col col-sm-10">
                            <p>&nbsp;</p>
                        </div>
                        <div className="col col-sm-1 align-items-end">
                            <Link to="/Movapp">
                        <button type="button" class="btn btn-dark">Back</button>
                        </Link>
                        </div>  
                    </div>
                </div>
            </div>
        </div>
    );
}
export default MovieDetail;