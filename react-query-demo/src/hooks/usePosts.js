import { useQuery } from "@tanstack/react-query";
import axios from "axios";

// 전체 데이터
export const useDetailPostQuery = (postId) =>  {
  return useQuery({
    queryKey: ['posts', postId],
    queryFn: () => {
        return axios.get(`http://localhost:3004/posts/${postId}`)
    },
    retry: 1,
    select: (data) => {
      return data.data
    },
  });
}

// 디테일 데이터
export const usePostQuery = () =>  {
  return useQuery({
    queryKey: ['posts'],
    queryFn: () => {
        return axios.get(`http://localhost:3004/posts`)
    },
    retry: 1,
    select: (data) => {
      return data.data
    },
  });
}
