import React, { useEffect } from 'react'
import MovieListing from '../movie/MovieListing'
import BaseUrl from '../../common/BaseUrl';
import {ApiKey} from '../../common/ApiKey'
import { useDispatch } from 'react-redux';
import { addMovies } from '../../features/movies/movieSlice';
const Home = () => {

    const movieName="captain america";

   const dispatch= useDispatch();


   const fetchMovieData=async ()=>{
    const resMovieData=await BaseUrl.get(`?apikey=${ApiKey}&s=${movieName}&type=movie`).catch((err)=>{
        console.log("err :",err)
    });  

    
   dispatch(addMovies(resMovieData.data))
}
    useEffect(() => {
        fetchMovieData()
    },[])

  return (
    <>
    <MovieListing />
    </>
  )
}

export default Home