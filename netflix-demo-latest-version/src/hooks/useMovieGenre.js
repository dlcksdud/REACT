import api from "../utils/api";
import { useQuery } from "@tanstack/react-query";

const fetchMovieGenre = () => {
    return api.get(`/genre/movie/list`)
}

export const useMovieGenreQuery = () => {
    return useQuery({
        queryKey: ['movie-genre'],
        queryFn: fetchMovieGenre,
        select: (result) => result.data.genres,
        // api 여러번 호출할 필요 없음
        staleTime: 300000, // 5분
    });
};