import { useEffect } from 'react'

// styles
import './Filter.css'

export default function Filter({ movies, setFiltered, genre, setGenre}) {

  useEffect(() => {
      
    if(genre === 0) {
    setFiltered(movies)
      return;
    }

  }, [genre])

  return (
    <div className='filter'>
      <button onClick={() => setGenre(0)}>All</button>
      <button onClick={() => setGenre(35)}>Comedy</button>
      <button onClick={() => setGenre(28)}>Action</button>
      <button onClick={() => setGenre(16)}>Animation</button>
    </div>
  )
}
