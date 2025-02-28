import React from 'react'
import { useTopRatedMoviesQuery } from '../../../../hooks/useTopRatedMovie';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Alert } from 'react-bootstrap';
import MovieCard from '../MovieCard/MovieCard';
import './TopRatedMovieSlide.style.css';

const TopRatedMovieSlide = () => {

    const {data, isLoading, isError, error} = useTopRatedMoviesQuery();
    if(isLoading) {return <h1>로딩중..</h1>}
    if(isError) {return <Alert varient="danger">{error.message}</Alert>}

    const responsive = {
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 6,
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2,
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1,
        }
    };

  return (
    <div>
        <h3>Top Rated Movie</h3>
        <Carousel
            infinite={true}
            centerMode={true}
            itemClass='movie-clider p-1'
            containerClass='carousel-container'
            responsive={responsive}
        >
            {data?.results.map((movie, idx) => <MovieCard movie={movie} key={idx} />)}
        </Carousel>
    </div>
  )
}

export default TopRatedMovieSlide