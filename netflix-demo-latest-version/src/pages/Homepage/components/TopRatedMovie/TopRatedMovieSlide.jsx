import React from 'react'
import { useTopRatedMoviesQuery } from '../../../../hooks/useTopRatedMovie';
import { Alert } from 'react-bootstrap';
import MovieSlider from '../../../../common/MovieSlider/MovieSlider';
import { responsive } from '../../../../constants/responsive';
import Spinner from 'react-bootstrap/Spinner';

const TopRatedMovieSlide = () => {

    const {data, isLoading, isError, error} = useTopRatedMoviesQuery();
    if(isLoading) {return (
      <div className='spinner-area' style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh'}}>
        <Spinner
          animation="border"
          variant="danger"
          style={{width: "5rem", height: "5rem"}}
        ></Spinner>
      </div>
    )}
    if(isError) {return <Alert varient="danger">{error.message}</Alert>}

  return (
    <div>
        <MovieSlider title={'Top Rated Movie'} movies={data?.results} responsive={responsive}/>
    </div>
  )
}

export default TopRatedMovieSlide