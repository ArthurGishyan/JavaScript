for(let el = 1; el <=20; el++) {
    if (el%2===0) {
        console.log(`el is: ${el}`);
    }
}

for (let i = 1; i <= 50; i++) {
    if (i % 3 === 0 && i % 5 === 0) { 
        console.log("FizzBuzz");
    } 
    else if (i % 3 === 0) {
        console.log("Fizz");
    } 
    else if (i % 5 === 0) {
        console.log("Buzz");
    } 
    else {
        console.log(i);
    }
}

for (let i = 1; i <= 10; i++) {
    for(let j = 1; j <= 10; j++) {
        console.log(`${i} * ${j} = ${i*j}`);
    }
}

let sum = 0;
for (let i = 1; i <= 100; i++) {
    sum += i
}
console.log(sum);


let result = ""
for (let i = 0; i < 8; i++) {
    for(let j = 0; j < 8; j++) {
        if ((i+j) % 2 === 0) result += " "
        else result += "#"
    }
    result += "\n"
}
console.log(result);

for (let i = 2; i <= 20; i++) {

    let isSimple = true;
    // debugger
    for(let j = 2; j < i; j++) {
        if(i % j === 0) {
            isSimple = false
            break;
        }
    }
    if (isSimple) {
        console.log(`${i} is simple`);
    }
}