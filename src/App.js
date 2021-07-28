import React ,{useEffect, useState} from "react";
import Movie from './components/movie';


import './App.css';


const FEATURE_API="https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=813e4d6e9a0fa4f3d4ee41fc05061863";
const SEARCH_API="https://api.themoviedb.org/3/search/movie?api_key=813e4d6e9a0fa4f3d4ee41fc05061863&query=";


function App() {
  const [movies,setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState([""]);
  useEffect(()=>{
    getMovies(FEATURE_API);
  },[]);

  const getMovies=(API)=>{
    fetch(API)
      .then((res)=>res.json())
      .then((data)=>{
        console.log(data)
        setMovies(data.results);
      });
  };

  const handleOnSubmit = (e) =>{
    e.preventDefault();
    if(searchTerm){
      getMovies(SEARCH_API+searchTerm);
setSearchTerm('');
}
}
  const onChangeHandler = (e) =>{
      setSearchTerm(e.target.value);
  }


  return (
    <>
        <div className="header">
          <h1 id="tit">MOVAPP</h1>
        <form onSubmit={handleOnSubmit}>
                                <input 
                                className="search" type="search" 
                                placeholder="search movies..."
                                value={searchTerm}
                                onChange={onChangeHandler}
                                />
        </form>         
                          
                            
                            
                      
        </div>
        <div className="movie-container">
          
          {movies.length >0 && movies.map((movie)=>
            <Movie key={movie.id} {...movie} />
          )}
          
        </div>
    </>
  );
}

export default App;
