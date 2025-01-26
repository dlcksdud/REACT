// 2. Destructuring
// 객체를 분해해서 가져옴

let person = {
    name:"cksdud",
    age: 20
}

// let name= person.name
// let age= person.age
// console.log(name, age)

// let {name, age} = person
let {age} = person

console.log(person)

// 배열에서도 적용가능
let array = [1,2,3,4]
// ab 변수안에 순서대로 넣은것임
// let [a,b]= array

// a,b 두개를 제외한 값을 rest에 넣는 거임
let [a,b,...rest]= array 

console.log(a,b) // 1 2
console.log(rest);


