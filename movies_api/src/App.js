import React,{useState} from 'react';

import MoviesList from './components/MoviesList';
import './App.css';

function App() {
const [movies,setmovies] = useState([])
const [loading,setloading] = useState(false)

 async function fetchmoviesHandler()
  {
    setloading(true)
    let res = await fetch('https://swapi.dev/api/films/')
   res.json().then((data)=>{
      const transformedMovies = data.results.map((movieData)=>
      {
        return{
          id: movieData.episode_id,
          title:movieData.title,
          releaseDate:movieData.release_date,
          openingText:movieData.opening_crawl
        }
      })
      console.log(transformedMovies)
      setmovies(transformedMovies)
      setloading(false)
    console.log(data.results)
    })
   
  }

  return (
    <React.Fragment>
      <section>
        <button onClick={fetchmoviesHandler}>Fetch Movies</button>
      </section>
      <section>
       
        {!loading && movies.length > 0 && <MoviesList movies={movies} />}
        {!loading && movies.length === 0 && <p>No Movies Found.</p>}
        {loading && <p>Loading..</p> }
      </section>
    </React.Fragment>
  );
}

export default App;
