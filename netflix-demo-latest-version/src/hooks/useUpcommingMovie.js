import { useQuery } from "@tanstack/react-query";
import api from "../utils/api"

const fetchUpCommingMovies = () => {
    return api.get(`/movie/upcoming`)
}

export const useUpCommingMoviesQuery = () => {
    return useQuery( {
        queryKey: ['movie-upComming'],
        queryFn: fetchUpCommingMovies,
        select: (result) => result.data,
    });
};