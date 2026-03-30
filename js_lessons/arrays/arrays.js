//arrau is range of
let myArr = ['El1', 'El2', 'El3']

//we can add all data types
let allDataArr = ['String', 1,true, function(){console.log('i am in array');}]
console.log(allDataArr);

//we cam also add another array to array
let multiArr = [[1,2,3],['el1','el2','el3',]]
console.log(multiArr);

//to find the last element of array we can use at
console.log(multiArr.at(-1)); //el1,el2,el3

//array methods
//push add new element to arrays end
let testPush = [1,2,3]

testPush.push(4);

console.log(testPush); //1,2,3,4

//shift removes array first element and returns it
let testShift = [0,1,2,3,4]

console.log(testShift.shift(0)); //0

console.log(testShift); //1,2,3,4 instead of 0,1,2,3,4

//unshift add first element
let testUnshift = [1,2,3,4]

testUnshift.unshift(0)

console.log(testUnshift); //0,1,2,3,4


//pop removes the last element of array and returns it
let testPop = [1,2,3,4]

console.log(testPop.pop()) //4

console.log(testPop); //1,2,3

//push and unshift can add many elements
testPush.push(5,6,7,8,9)

console.log(testPush); //1-9

testUnshift.unshift(-2,-1,)

console.log(testUnshift); //-2-4

//to make reversed array we use reverse()
let reverseTest = [1,2,3,4,5]

reverseTest.reverse();

console.log(reverseTest); //5,4,3,2,1