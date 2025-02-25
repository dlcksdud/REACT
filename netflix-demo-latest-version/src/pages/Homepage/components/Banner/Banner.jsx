import React from 'react'
import { usePopularMoviesQuery } from '../../../../hooks/usePopularMovies'
import { Alert } from 'react-bootstrap';

const Banner = () => {

  const {data, isLoading, isError, error} = usePopularMoviesQuery();
  console.log("ddd", data?.results[0].poster_path);
  if(isLoading) {
    <h1>쪼매만 기다료~</h1>
  }
  if(isError) {
    <Alert variant='danger'>
        {error.messege}
    </Alert>
  }
  return (
    <div style={{
        backgroundImage: "url(https://media.themoviedb.org/t/p/w533_and_h300_bestv2" + `${data?.results[0].poster_path}` + ")"
        
    }}>
        
    </div>
  )
}

export default Banner