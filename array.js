//Original Array
let QKIT = [
    { name: 'Bao', age: 31 },
    { name: 'Khoi', age: 25 },
    { name: 'Quy', age: 27 },
    { name: 'Khanh', age: 28 },
    { name: 'Thinh', age: 32 },
]

//0: Sort original array by age
let sortArr = (arr) => {
    let newArr = arr.sort((a, b) => {
        return a.age - b.age;
    });
    console.log("New Array: ", newArr)
}
// sortArr(QKIT)

//1: Add property "children = true" for each person if (age > 30)
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

//2: Calculate average age
let avgAge = (arr) => {
    let avg = 0
    let sum = 0
    arr.forEach((e) => {
        sum += e.age
    })
    avg = sum / 5
    return avg
}
// console.log("Average Age: ", avgAge(QKIT))

//3: Randomly choose a person and x2 age
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
let doubleAge = (arr) => {
    let newArr = [...arr]
    let newRandom = getRandomInt(0, 4)
    newArr[newRandom].age = 2 * newArr[newRandom].age
    return newArr
}
// console.log(doubleAge(QKIT))

//4: Add new element
let addElement = (arr) => {
    let newArr = [...arr]
    newArr.push({
        name: 'Wind', age: 21
    })
    newArr.unshift({
        name: 'Phong', age: 21
    })
    console.log(newArr)
}
// addElement(QKIT)

//5: Add new Object before each object
let addObj = (arr) => {
    let newArr = [...arr]
    let newObj = { name: '______', age: 0 }
    arr.forEach((item, index) => {
        newArr.splice(index * 2, 0, newObj)
    })
    return newArr
}
// let arr3 = doubleAge(QKIT)
// console.log(addObj(arr3))

//6: log array without 2 first element
let logArray = (arr) => {
    let newArr = arr.slice(2)
    return newArr
}
// console.log(logArray(QKIT))