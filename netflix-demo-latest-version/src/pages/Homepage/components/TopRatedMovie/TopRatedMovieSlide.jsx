import React from 'react'
import { useTopRatedMoviesQuery } from '../../../../hooks/useTopRatedMovie';
import { Alert } from 'react-bootstrap';
import MovieSlider from '../../../../common/MovieSlider/MovieSlider';
import { responsive } from '../../../../constants/responsive';

const TopRatedMovieSlide = () => {

    const {data, isLoading, isError, error} = useTopRatedMoviesQuery();
    if(isLoading) {return <h1>로딩중..</h1>}
    if(isError) {return <Alert varient="danger">{error.message}</Alert>}

  return (
    <div>
        <MovieSlider title={'Top Rated Movie'} movies={data?.results} responsive={responsive}/>
    </div>
  )
}

export default TopRatedMovieSlide