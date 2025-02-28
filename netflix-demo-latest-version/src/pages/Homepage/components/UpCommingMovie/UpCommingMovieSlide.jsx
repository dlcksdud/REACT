import React from 'react'
import { Alert } from 'react-bootstrap';
import { useUpCommingMoviesQuery } from '../../../../hooks/useUpcommingMovie';
import MovieSlider from '../../../../common/MovieSlider/MovieSlider';
import { responsive } from '../../../../constants/responsive';

const UpCommingMovieSlide = () => {

    const {data, isLoading, isError, error} = useUpCommingMoviesQuery();
    if(isLoading) {return <h1>로딩~~</h1>}
    if(isError) {return <Alert variant='danger'>{error.message}</Alert>}

  return (
    <div>
        <MovieSlider title={'Upcomming Movies'} movies={data?.results} responsive={responsive}/>
    </div>
  )
}

export default UpCommingMovieSlide