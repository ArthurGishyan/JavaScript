//array copy
let myArr = ['BMW', 'Mercedess']

let copyArr = myArr;

copyArr.push('Audi')

console.log(copyArr);
console.log(copyArr.length); //3

let styles = ['Jazz', 'Blyuz']

console.log(styles);

styles.push('Rock')

console.log(styles);

styles[Math.floor((styles.length - 1) / 2)] = 'Classic'

console.log(styles);

styles.shift()

console.log(styles);

styles.unshift('Rap', 'Raggy')

console.log(styles);
