
import { useState, useEffect } from 'react'
import './App.css';
import Movie from './Movie';
import AddMovie from './AddMovie';

function App() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    fetchMoviesHandler()
  }, [])

  const addMovieHandler = (movie) => {
    console.log(movie)
  }
  async function fetchMoviesHandler() {
    setIsLoading(true)
    setError(null)

    try {
      const response = await fetch('https://swapi.dev/api/films/')
      if (!response.ok) {
        throw new Error('Something went wrong!')
      }
      const data = await response.json()



      const transformMovies = data.results.map(movie => ({
        id: movie.episode_id,
        title: movie.title,
        openingText: movie.opening_crawl
      }
      ))
      setMovies(transformMovies)
    } catch (error) {
      setError(error.message)
    }
    setIsLoading(false)
  }

  console.log(movies)







  return (
    <div className="App">
      <AddMovie onAddMovie={addMovieHandler} />
      <button onClick={fetchMoviesHandler}>Fetch Movies</button>
      <div>
        {!isLoading && <Movie movies={movies} />}
        {!isLoading && movies.length === 0 && !error && <p>No Movies Available</p>}
        {!isLoading && error && <p>{error}</p>}
        {isLoading && <p>Loading...</p>}

      </div>
    </div>
  );

}

export default App;
