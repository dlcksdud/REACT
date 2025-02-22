import React from 'react'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'

const ReactQueryPage = () => {
  const {isLoading, data, isError, error} = useQuery({
    queryKey: ['posts'],
    queryFn: () => {
        return axios.get('http://localhost:3004/posts')
    },
    retry: 1,
    select: (data) => {
      return data.data
    },
    // gcTime: 5000, // 캐쉬를 5초 후 비워라
  });
  console.log(data[0].title);

  // const tlqkf = data.title;
  if(isLoading) {
    return <h1>로딩중...</h1>
  }
  if(isError) {
    return <h1>삐용삐용 에러!!!</h1>
  }

  return (
    <div>
      {data.map((i) => {
        return <div>뭐야{i.title}</div>
      })}

    </div>
  )
}

export default ReactQueryPage
