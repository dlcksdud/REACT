// 3. spread
let pserson = {
    name : "chan",
    age: 12
}

/// 똑같은 객체가 형성이 됨
let person2 = {...person} // 객체의 내용을 복사
let person3 = person

/**
 * 위 2개의 차이점
 * person3는 객체의 주소값을 참조
 * person2는 아예 다른 객체를 복사하는 개념
 */

console.log(person == person2) // false
console.log(person == person3) // true -> 하나의 객체를 둘이 바라보고 있는것

let person4 = {...person, addr:"gwanjin"}
// 이렇게 새로운 정보를 추가할 수도 있음

let person5 = {...person, name: "yeho"}
// 이렇게 하면 person 값을 복사하면서 name값을 바꿀 수도 있음

// 배열에도 똑같이 적용됨.
let a = [1,2]
let b = [...a, 3]
console.log(b) // [1,2,3]

let c = [...a, ...b]
console.log(c)// [1,2,1,2,3]





