import React from 'react'
import { Alert } from 'react-bootstrap';
import { useUpCommingMoviesQuery } from '../../../../hooks/useUpcommingMovie';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import MovieCard from '../MovieCard/MovieCard';
import './UpCommingMovieSlide.style.css';

const UpCommingMovieSlide = () => {

    const {data, isLoading, isError, error} = useUpCommingMoviesQuery();
    if(isLoading) {return <h1>로딩~~</h1>}
    if(isError) {return <Alert variant='danger'>{error.message}</Alert>}

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
        <h3>Upcomming Movies</h3>
        <Carousel
            infinite={true}
            centerMode={true}
            itemClass='movie-clider p-1'
            containerClass='carousel-container'
            responsive={responsive}
        >
            {data?.results.map((movie, index) => <MovieCard movie={movie} key={index} />)}
        </Carousel>
    </div>
  )
}

export default UpCommingMovieSlide