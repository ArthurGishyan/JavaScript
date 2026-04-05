function multiply(a,b) {
    return a * b
} console.log(multiply(4,5));

function ageCheck(age) {
    if (age >= 18) return true
    else return false
}
console.log(ageCheck(6));

function findMin(arr) {
    let minimal = arr[0]

    for(let i = 0; i < arr.length; i++) {
        if (arr[i] < minimal) {
            minimal = arr[i]
        } 
    }
    return minimal
}
console.log(findMin([5,6,55,6,1,2,3,6,4,8,888]));

//make arrow

const mult = (a,b) => a * b
console.log(mult(4,5));

const checkAge = (age) => age >= 18;
console.log(19);

//callback
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function filterArray(arr, callback) {
    const result = [];
    for(let i = 0; i < arr.length; i++) {
        if (callback(arr[i])) { 
            result.push(arr[i]);
        }
    }
    return result
} console.log(filterArray(numbers, (a)=> a > 5));

const review = "яблоко банан яблоко апельсин банан яблоко киви";

function findTopWord(text) {
    const words = text.split(" ");

    const wordCount = new Map();

    for (let currentWord of words) {
        
        if(wordCount.has(currentWord)) {
            let changedVal = wordCount.get(currentWord)
            changedVal += 1
            wordCount.set(currentWord, changedVal)
        }
        else {
            wordCount.set(currentWord, 1)
        }
    }

    let maxCount = 0;
    let topWord = "";

    for (let [word, count] of wordCount) {
        if(count > maxCount) {
            maxCount = count
            topWord = word
        }

    }
    console.log(wordCount);
    return topWord
}

findTopWord(review);

const clients = [
  { id: 1, name: "Иван", age: 17, balance: 500, isActive: true },
  { id: 2, name: "Анна", age: 25, balance: 1200, isActive: true },
  { id: 3, name: "Петр", age: 30, balance: 800, isActive: false },
  { id: 4, name: "Мария", age: 19, balance: 3000, isActive: true },
  { id: 5, name: "Алексей", age: 40, balance: 0, isActive: true }
];

function calculateActiveWealth(users) {
    const targetUsers = users.filter((preferences)=> preferences.age >= 18 && preferences.isActive === true).map((user)=> user.balance).reduce((acc, balance) => acc + balance, 0)
    return targetUsers
}
console.log(calculateActiveWealth(clients));

//recursion
function factorial(n) {
    if (n === 0) return 1
    return n * factorial(n - 1)
}
console.log(factorial(5)); //120

//fibonacci
function fibonacci(n) {
    if (n === 0) return 0
    if (n === 1) return 1

    return fibonacci(n-1) + fibonacci(n-2)
}
console.log(fibonacci(10)); //55

//pallindrome
function isPallindrome(num) {
    const stringedNum = num.toString()

    if (stringedNum.length === 1) return true

    if (stringedNum[0] !== stringedNum[stringedNum.length - 1]) return false

    const slicedNum = stringedNum.slice(1,-1)
    return isPallindrome((slicedNum))
} console.log(isPallindrome(12321)); //true