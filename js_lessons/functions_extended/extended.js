function isPalindrom(number) {
    let stringNum = number.toString()
    if(stringNum == 0) return true;
    if(stringNum[0] !== stringNum[stringNum.length-1]) return false; 
    
    return isPalindrom(stringNum.slice(1,-1))
} console.log(isPalindrom(121));

function reverse(arr) {
    console.log(arr.length);
    
    if(arr.length === 0) return arr;

    let firstEl = arr[0]
    
    let allEl = arr.slice(1)
    
// allEl.push(firstEl)

    return reverse(allEl).concat(firstEl)
} 
console.log(reverse([1,2,3,4]))


function pow1(x, n) {
    let result = 1;

    for(let i = 0; i < n; i++) {
        result *= x;
    }

    return result;
}

console.log(pow1(2,2));

function powFunc(a, b) {

    let powRes = 1;

    for(let i = 0; i < b; i++) {
        powRes *=  a;
    }

    return powRes;
}

console.log(powFunc(3,2));

//we can use recursion for math pow
function pow(x, n) {
  if (n == 1) {
    return x;
  } else {
    return x * pow(x, n - 1); 
  }
}

console.log(pow(2,3));

function sumTo(n) {
    let sum = 0;
    for(let i = 1; i <= n; i++) {
        sum+=i;
    }
    return sum;
}
console.log(sumTo(10));//55

function sumRec(n) {
    if (n === 1) return 1;
    else {
        return n + sumRec(n-1)
    }
} console.log(sumRec(10));

//factorial
function numFactorial(num) {

    let mult = 1;

    for(let i = 1; i <= num; i++) {
        mult *= i;
    }

    return mult;
}

console.log(numFactorial(3));

//function fibonachee
function fibonachee(num) {
    if (num <= 1) return num
    else {
        return fibonachee(num-1) + fibonachee(num-2)
    }
}
console.log(fibonachee(7)); //13

function numRange(n) {
    for(let i = 1; i <= n; i++){
        console.log(i);
    }
}
console.log(numRange(5));

function numRange(n, current = 1) {
  if (current > n) return;

  numRange(n, current + 1);
  console.log(current);
}

numRange(5);

//args 
function allArgs(...args) {

    let sum = 0;

    for(let arg of args) {
        sum+=arg
    }
    return sum;
} console.log(allArgs(1,2));

//we use arguments
function something() {
    return arguments[0]
} console.log(something('Something')); //something

//enchancement operator ...arr
//for array we cant use Math.max or min etc
let myArray = [18,3,66,2]

console.log(Math.max(...myArray)); //return 66
console.log(Math.min(...myArray)); //return 2

//we can use ...arrayname to joiin 2 arrays
let myArray2 = [8,9,66,9,42,]
let merge = [...myArray, 2, ...myArray2]
console.log(merge);


