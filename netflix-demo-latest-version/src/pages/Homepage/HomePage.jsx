import React from 'react'
import Banner from './components/Banner/Banner'
import PopularMovieSlide from './components/PopularMovieSlide/PopularMovieSlide'
import TopRatedMovieSlide from './components/TopRatedMovie/TopRatedMovieSlide'
import UpCommingMovieSlide from './components/UpCommingMovie/UpCommingMovieSlide'

/**
1. 배너 : popular 영화를 들고와서 첫번째 아이템을 보여주자
2. popular movie
3. top rated movie
4. upcoming movie
 */
const Homepage = () => {
  return (
    <div>
      <Banner />
      <PopularMovieSlide />
      <TopRatedMovieSlide />
      <UpCommingMovieSlide />
    </div>
  )
}

export default Homepage