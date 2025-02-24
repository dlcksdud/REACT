import React from 'react'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import { usePostQuery } from '../hooks/usePosts'

const ReactQueryPage = () => {

  // 커스텀 훅 만들기
  // const {isLoading, data, isError, error, refetch} = useQuery({
  //   queryKey: ['posts', 1],
  //   queryFn: (queryData) => {
  //       const id = queryData.queryKey[1];
  //       return axios.get(`http://localhost:3004/posts/${id}`)
  //   },
  //   retry: 1,
  //   // staleTime: 60000, // fresh 데이터가 stale로 넘어가고 60초간은 api 호출 안함
  //   select: (data) => {
  //     return data.data
  //   },
  //   // gcTime: 5000, // 캐쉬를 5초 후 비워라
  //   // refetchInterval: 3000, // 3초마다 api 호출
  //   // refetchOnMount: true,
  //   // refetchOnWindowFocus: true,
  //   // enabled: false,
  // });
  
  // 전체 데이터
  const {data, isLoading, isError, error, refetch} = usePostQuery();
  // 부분 데이터
  // const {data, isLoading, isError, error, refetch} = usePostQuery(1);


  // const tlqkf = data.title;
  if(isLoading) {
    return <h1>로딩중...</h1>
  }
  if(isError) {
    return <h1>삐용삐용 에러!!!</h1>
  }

  return (
    <div>
      {data?.map((i, idx) => {
        return <div key={idx}>뭐야{i.title}</div>
      })}
      <button onClick={refetch}>post리스트 다시 들고오기</button>
    </div>
  )
}

export default ReactQueryPage
