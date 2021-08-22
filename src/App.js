import React ,{useEffect, useState} from "react";
import {BrowserRouter as Router , Switch, Route} from 'react-router-dom';
import api from './api/fetch';
import HeaderComponent from "./components/headerComponent";
import RenderMovie from './components/renderMovie'

import './App.css';


const FEATURE_API="/discover/movie?sort_by=popularity.desc&api_key=813e4d6e9a0fa4f3d4ee41fc05061863";
const SEARCH_API="/search/movie?api_key=813e4d6e9a0fa4f3d4ee41fc05061863&query=";


function App() {
  const [movies,setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState([""]);
  useEffect(()=>{
    getMovies(FEATURE_API);
  },[]);

  const getMovies=async(API)=>{
    try{
      const response = await api.get(API);
      setMovies(response.data.results);
    }catch(e){
      console.log(e);
    }
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
        //<HeaderComponent onChangeHandler={onChangeHandler} handleOnSubmit={handleOnSubmit}  />
    <Router>
      <Route render={(props)=>
        (<HeaderComponent {...props} movies={movies} 
        searchTerm={searchTerm} onChangeHandler={onChangeHandler} 
        handleOnSubmit={handleOnSubmit} />)}>
        </Route>
        <Switch>
          <Route path="/Movapp" exact render={(props)=>(<RenderMovie {...props} movies={movies} />)}>

          </Route>
        </Switch>
    </Router>





    // <>
    //     <div className="header">
    //       <h1 id="tit">MOVAPP</h1>
    //     <form onSubmit={handleOnSubmit}>
    //                             <input 
    //                             className="search" type="search" 
    //                             placeholder="search movies..."
    //                             value={searchTerm}
    //                             onChange={onChangeHandler}
    //                             />
    //     </form>         
                          
                            
                            
                      
    //     </div>
    //     <div className="movie-container">
          
    //       {movies.length >0 && movies.map((movie)=>
    //         <Movie key={movie.id} {...movie} />
    //       )}
          
    //     </div>
    // </>
  );
}

export default App;
