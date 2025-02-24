import { useQueries } from '@tanstack/react-query';
import axios from 'axios';
import React from 'react'

const ReactQueryPage_useQueries = () => {
  const ids = [1, 2, 3, 4];

  const fetchPostDetail = (id) => {
    return axios.get(`http://localhost:3004/posts/${id}`);
  }

  const results = useQueries({
    queries: ids.map((id) => {
      return {
        queryKey: ["posts", id],
        queryFn: () => fetchPostDetail(id),
      }
    }),
    combine: (results) => {
      return {
        data: results.map((result) => result.data)
      }
    }
  })

  console.log(results);

  return (
    <div>ReactQueryPage_useQueries</div>
  )
}

export default ReactQueryPage_useQueries