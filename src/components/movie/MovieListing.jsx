import React from 'react'
import { useSelector } from 'react-redux'
import { getAllMoviesData } from '../../features/movies/movieSlice'
import MovieCard from './MovieCard'

const MovieListing = () => {
  const movies = useSelector(getAllMoviesData)

  let renderAllMovie = "";

  renderAllMovie = movies.Response === "True" 
  ? (
    movies.Search.map((items, index) => {
      return (
                <MovieCard key={index} data={items} />
      )
    })
  ) 
  : (
    <div className="center">{movies.Errors}</div>
  )

  return (
    <>
      <div className="container-1">
        <div className="rows">
           {renderAllMovie}
        </div>
      </div>
    </>
  )
}

export default MovieListing