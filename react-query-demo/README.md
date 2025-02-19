# React-Query (v5)
[https://tanstack.com/query/latest/docs/framework/react/overview](https://tanstack.com/query/latest/docs/framework/react/overview)
- Powerful asynchronous state management : 비동기 상태 관리를 겁나 파워풀하게 해주겠다.  

- React 상태관리  
    - 지역상태 : component 내에서 쓰는 useState같은 상태
    - 전역상태 : 전체에서 쓰이는 상태, 웹사이트 테마, 색, 유저정보 등
    - 서버상태 : api 통신할 때 필요한 상태들 (서버에서 받은 데이터, isLoading, error 등)  

- react query는 특히 `서버상태`를 관리
- 지역상태 관리에는 react query는 애매함  

- 장점
1. 코드가 단순해진다.
2. 캐쉬 관리 : 서버의 부하를 줄여줌 / 서버에 요청을 할지 말지도 상태를 만들어 줄 수 있다.
3. 서버상태와 전역상태 분리 (단점일수도?)

- 설치
```shell script
npm i @tanstack/react-query
```
- 사용
```javascript
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const root = ReactDOM.createRoot(document.getElementById('root'));
const QueryClient = new QueryClient()
root.render(
  <QueryClientProvider client={queryClient}>
    <App />
  </QueryClientProvider>
);
```

## reac-query devTools
```shell script
npm i @tanstack/react-query-devtools
```
```javascript
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      {/* The rest of your application */}
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  )
}
```

---
## useQuery
```javascript
import { useQuery } from '@tanstack/react-query'

const {isLoading, data, isError, error} = useQuery({
    queryKey: ['posts'],
    queryFn: () => {
        return axios.get('http://localhost:3004/posts')
    },
    retry: 1 // api 호출 실패 시 1번 더 재시도
});
console.log(data, isLoading);
console.log(isError, error);
```
- api 호출 각각에 이름을 정해줄 수 있다. -> queryKey
  - 각 호출의 이름이 unique해야 한다.
- 컴포넌트가 호출될 때 자동으로 useQuery 호출 됨
- api 호출 실패 시 3번 더 시도함 : retry 기능
  - 기본 재시도 횟수는 3번
  - 몇 번 더 시도할 지 횟수 지정 가능






