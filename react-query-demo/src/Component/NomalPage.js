import React, { useEffect, useState } from 'react'

const NomalPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState(null);

  const fetchPost = async() => {
    setIsLoading(true);
    const url = "http://localhost:3004/posts";
    const response = await fetch(url);
    const data = await response.json();
    setIsLoading(false);
    setData(data);
  }
  useEffect(() => {
    fetchPost();
  }, []);
  if(isLoading) {return <h1>조금만 기다료..</h1>}
  return (
    <div>
        {data?.map((item, idx) => {
            return <div key={idx}>{item.title}</div>
        })}
    </div>
  )
}

export default NomalPage