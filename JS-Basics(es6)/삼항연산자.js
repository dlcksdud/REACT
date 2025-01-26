// 4. 삼항연산자
let person = {name: "djfsd", age: 17}
// let person = null // false

if(person) {
    console.log(person.name)
}else {
    console.log("there is no person")
}


// react에서는?
console.log(person?person.name:"there is no person")
