import React, {useState} from 'react'
import {useSearchMovieQuery} from '../../hooks/useSearchMovie';
import { useSearchParams } from 'react-router-dom';
import { Alert, Container, Row, Col} from 'react-bootstrap';
import MovieCard from '../../common/MovieCard/MovieCard';
import Spinner from 'react-bootstrap/Spinner';
import ReactPaginate from 'react-paginate';
import './MoviePage.style.css';

/**
 * MoviePage에 오는 경로 2가지
 * 1. navbar에서 클릭해서 온 경우 => popular movie 보여줌
 * 2. keyword를 입력해서 온 경우 => keyword와 관련된 영화들을 보여줌
 * 
 * pagenation
 * pagenation 설치
 * page state만들기
 * pagenation 클릭할 때 마다 page 바꿔주기
 * page값이 바뀔 때 마다 useSearchMovie에 page까지 넣어서 fetch
 */
const MoviePage = () => {

  const [query, setQuery] = useSearchParams();
  const keyword = query.get('q');
  const [page, setPage] = useState(1);

  const {data, isLoading, isError, error} = useSearchMovieQuery({keyword, page});
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

  const handlePageClick = ({selected}) => {
    setPage(selected + 1);
  }

  return (
    <Container>
      <Row>
        <Col lg={4} xs={12}></Col>
        <Col lg={8} xs={12}>
          <Row>
            {data?.results.map((movie, idx) => 
              <Col key={idx} lg={4} xs={12}>
                <MovieCard movie={movie}></MovieCard>
              </Col>
            )}
          </Row>
          <ReactPaginate
            nextLabel=">"
            onPageChange={handlePageClick}
            pageRangeDisplayed={3}
            marginPagesDisplayed={2}
            pageCount={data?.total_pages} // 전체페이지 수
            previousLabel="<"
            pageClassName="page-item"
            pageLinkClassName="page-link"
            previousClassName="page-item"
            previousLinkClassName="page-link"
            nextClassName="page-item"
            nextLinkClassName="page-link"
            breakLabel="..."
            breakClassName="page-item"
            breakLinkClassName="page-link"
            containerClassName="pagination"
            activeClassName="active"
            renderOnZeroPageCount={null}
            forcePage={page - 1}
          />
        </Col>
      </Row>
    </Container>
  )
}

export default MoviePage