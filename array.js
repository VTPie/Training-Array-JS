//Original Array
let QKIT = [
    { name: 'Bao', age: 31 },
    { name: 'Khoi', age: 25 },
    { name: 'Quy', age: 27 },
    { name: 'Khanh', age: 28 },
    { name: 'Thinh', age: 32 },
]

//Sort original array by age
let sortArr = (arr) => {
    let newArr = arr.sort((a, b) => {
        return a.age - b.age;
    });
    console.log("New Array: ", newArr)
}
// sortArr(QKIT)

//Add property "children = true" for each person if (age > 30)
let addProps = (arr) => {
    let newArr = arr.map((obj) => {
        if (obj.age > 30) {
            obj.children = true
            return obj
        }
        return obj
    })
    console.log(newArr)
}
// addProps(QKIT)

//Randomly choose a person and x2 age
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
let doubleAge = (arr) => {
    let newArr = [...arr]
    let newRandom = getRandomInt(0, 4)
    newArr[newRandom].age = 2 * newArr[newRandom].age
    console.log(newArr)
}
// doubleAge(QKIT)