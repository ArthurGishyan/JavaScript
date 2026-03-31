//arr splice delete current element arr.splice(start delete_count)
let spliceEx = [1,2,3,4,5,6]

spliceEx.splice(2,1) //it will delete 3, 2 is start 1 is delete count

console.log(spliceEx); //1,2,4,5,6

//it also can add another elements
spliceEx.splice(0, 2, 'string1', 'string2')

console.log(spliceEx); // [ "string1", "string2", 4, 5, 6 ]

//it returns deleted elements

let splicedEls = spliceEx.splice(3,1)

console.log(splicedEls); //5

//it can also add element but not delete any another

spliceEx.splice(0,0, 'add1','add2')

console.log(spliceEx); //[ "add1", "add2", "string1", "string2", 4, 6 ]

//arr slice returns new array from index start to end
let sliceTest = [1,2,3,4,5,6,7]

console.log(sliceTest.slice(-1)); //7 returned last element

console.log(sliceTest.slice(2, 5))//3,4,5

//arr concat copy main arrah and add elements you like
let concatTest = [1,2,3,4,5,6,7]

console.log(concatTest.concat([8,9,10])); //1-10

//forEach allows run function for any element of array
forEachTest = ['first', 'second', 'third']

forEachTest.forEach((item, index) => {console.log(`${item} has ${index} index`);}) //first has 0 index second has 1 index  third has 2 index

//search in array
//indexOf shows the current element index
let indexTest = [false, true, 'something']

console.log(indexTest.indexOf(false)); //0
console.log(indexTest.indexOf(null)); //-1

//includes shows does array includes ccurrent value
console.log(indexTest.includes(false)); //true

//lastIndexOf the same indexOf but from right to left
let indexArr = ['youtube', 'chrome', 'youtube']
console.log(indexArr.lastIndexOf('youtube'));//2

//filter
let filtherTest = [1,2,3,4,5]
console.log(filtherTest.filter(num => num > 3)); //[4,5]

//map run function for each element of array and return new array
let mapTest = [1,2,3]
let mappedArr = mapTest.map((number, index) => console.log(`number is ${number}, index is ${index}`));

//reduce map slice split concat push pop flat every

//flat
let flatTest  = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
]

let newFlatT = flatTest.flat()

console.log(newFlatT);

let everyTest = [1,2,3,4,5,6]

if (everyTest.every(el => el % 2 === 0)) {
    true
} else if (everyTest.some(el => el % 2 === 0)) {
    console.log('sth');
    
}
