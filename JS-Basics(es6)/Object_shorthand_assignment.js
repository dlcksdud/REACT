/** 1. object shorthand assignment */ 
let name = "chanyoung"
let age = 17

let person = {
    name: name,
    age: age 
}
   
console.log(person)
// 여기까지 일반적인 형태
// 아래부터 shorhand 줄여서 쓰기

// key와 value의 값이 일치할 때 이렇게 쓸 수 있는 거임
let personShort = {
    name,
    age
}
console.log(personShort)



