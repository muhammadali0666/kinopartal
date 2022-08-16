import exios from "axios"
import { useState } from "react"
import { useEffect } from "react"
import "./Page.css/page.css"

export const TopMovies = () => {

  const [ movies, setMovies ] = useState({})
  useEffect(() => {
    exios.get('https://api.themoviedb.org/3/movie/upcoming', {
    params: {
      api_key: "4ae2bfba4d427f83c3c89c4e9a673697"
    },
    })
    .then(res => setMovies(res.data))
    .catch(err => console.log(err))
  },[])

  return(
    <div className="poular-movi">
    {movies.results && <ul className="d-flex card-list">
      {movies.results.map((e) => (
        <li key={e.id} className="mx-4 text-light">
        <img src={`https://image.tmdb.org/t/p/w200${e.poster_path}`} alt={e.title} />
        <div className="p-2">
          <h4 className="fs-5">{e.title}</h4>
          <p>Lang:{e.original_language}</p>
          <p>Vote:{e.vote_count}</p>
        </div>
        </li>
      ))}
      </ul>}
    </div>
  )
}