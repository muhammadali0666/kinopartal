import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import exios from "axios"
export const PopularPosts = () => {
  const [movies, setMovies] = useState({});

  const { id } = useParams();

  useEffect(() => {
    exios.get(`https://api.themoviedb.org/3/movie/${id}`, {
    params: {
      api_key: "4ae2bfba4d427f83c3c89c4e9a673697"
    },
    })
    .then(res => setMovies(res.data))
    .catch(err => console.log(err))
  },[])
  return (
    <>
      {movies && (
        <>
          <div className="position-absolute back">
            <img
              className="back"
              src={`https://image.tmdb.org/t/p/w500/${movies.backdrop_path}`}
              alt=""
            />
          </div>
          <div className="d-flex render">
          <img src={`https://image.tmdb.org/t/p/w200${movies.poster_path}`} alt={movies.title} />
            <div>
              <h1>{movies.title}</h1>
              <p>{movies.overview}</p>
              <p>Budget : {movies.popularity}$</p>
              <p>Release date : {movies.first_air_date}</p>
              <p>Run Time : {movies.episode_run_time}min</p>
            </div>
          </div>
        </>
      )}
    </>
  );
};
