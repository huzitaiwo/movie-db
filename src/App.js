import { useFetch } from "./hooks/useFetch"

// styles
import "./App.css"
import Movie from "./components/Movie";

function App() {
  // https://api.themoviedb.org/3/movie/550?api_key=821df521d9494e5d28d041685eeaee64

  // images
  // https://image.tmdb.org/t/p/w500/kqjL17yufvn9OVLyXYpvtyrFfak.jpg
  const url = 'https://api.themoviedb.org/3/movie/popular?api_key=821df521d9494e5d28d041685eeaee64';
  const { data: movies, isPending, error } = useFetch(url)


  return (
    <div className="App">
      <div className="popular-movies">
        {movies && movies.map(movie => (
          <Movie key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  )
}

export default App;
