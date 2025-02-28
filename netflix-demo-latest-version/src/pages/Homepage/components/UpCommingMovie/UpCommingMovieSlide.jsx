import React from 'react'
import { Alert } from 'react-bootstrap';
import { useUpCommingMoviesQuery } from '../../../../hooks/useUpcommingMovie';
import MovieSlider from '../../../../common/MovieSlider/MovieSlider';
import { responsive } from '../../../../constants/responsive';
import Spinner from 'react-bootstrap/Spinner';

const UpCommingMovieSlide = () => {

    const {data, isLoading, isError, error} = useUpCommingMoviesQuery();
    if(isLoading) {return (
      <div className='spinner-area' style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh'}}>
        <Spinner
          animation="border"
          variant="danger"
          style={{width: "5rem", height: "5rem"}}
        ></Spinner>
      </div>
    )}
    if(isError) {return <Alert variant='danger'>{error.message}</Alert>}

  return (
    <div>
        <MovieSlider title={'Upcomming Movies'} movies={data?.results} responsive={responsive}/>
    </div>
  )
}

export default UpCommingMovieSlide