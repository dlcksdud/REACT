import React from 'react'
import { Badge } from 'react-bootstrap'
import './MovieCard.style.css'
import rating from '../../assets/rating.png';
import audience from '../../assets/audience.png';
import age from '../../assets/age.png';
import { useMovieGenreQuery } from '../../hooks/useMovieGenre';

const MovieCard = ({movie}) => {
    
    const {data: genreData} = useMovieGenreQuery();

    const showGenre = (genreIdList) => {
        
    }

  return (
    <div className='movie-card' style={{backgroundImage: "url(" + `https://media.themoviedb.org/t/p/w600_and_h900_bestv2${movie.poster_path}` + ")"}}>
        <div className='overlay'>
            <h1>{movie.title}</h1>
            {showGenre(movie.genre_ids).map((id) => (
                <Badge bg="danger">{id}</Badge>
            ))}
            <div>
                <img width={20} src={rating} alt="average icon" />
                {movie.vote_average}
            </div>
            <div>
                <img width={20} src={audience} alt='audience icon'/>
                {movie.popularity}
            </div>
            <div>
                <img width={20} src={age} alt='age icon'/>
                {movie.adult ? 'over18' : 'under18'}
            </div>
        </div>
    </div>
  )
}

export default MovieCard