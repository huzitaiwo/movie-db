import { useFetch } from "./hooks/useFetch"

// styles
import "./App.css"

function App() {
  // https://api.themoviedb.org/3/movie/550?api_key=821df521d9494e5d28d041685eeaee64

  // images
  // https://image.tmdb.org/t/p/w500/kqjL17yufvn9OVLyXYpvtyrFfak.jpg
  const url = 'https://api.themoviedb.org/3/movie/550?api_key=821df521d9494e5d28d041685eeaee64';
  const { data: movies, isPending, error } = useFetch(url)
  return <div className="App">movie app</div>;
}

export default App;
