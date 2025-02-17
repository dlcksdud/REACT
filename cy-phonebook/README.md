# 연락처 페이지 만들기 (Redux.ver)
### Step
1. 왼쪽에는 연락처 등록하는 폼이, 오른쪽에는 연락처 리스트와 search창이 있다.  
2. 리스트에 사용자 이름과 전화번호를 추가할 수 있다.  
3. 리스트에 아이템 수가 보인다.  
4. 사용자가 연락처를 이름검색으로 찾을 수 있다.  

- key:value 의 이름이 같다면 하나만 적어도 됨 {name: name, phoneNumber: phoneNumber}  
- reducer에서 action. 버리기 : `const {type, payload} = action`  