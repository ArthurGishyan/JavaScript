const musicStyle = ['Jazz', 'Bluze']

musicStyle.push('Rock')

const middleIndex = Math.floor(musicStyle.length / 2)

musicStyle[middleIndex] = 'Classic'

let lastEl = musicStyle.pop()

console.log(lastEl);

console.log(musicStyle);

//ex 2
const prices = [250, 100, 50, 400, 900];

let sum = 0

for(let i = 0; i < prices.length; i++) {
    sum += prices[i]
} console.log(sum);

const runTimes = [45, 32, 56, 29, 41];

let maxTime = runTimes[0]

for(let i = 1; i < runTimes.length; i++) {
    if(runTimes[i] > maxTime) {
        maxTime = runTimes[i]
    }
}
console.log(maxTime);

//methods
//include
const numbers = [1, 2, 3, 4, 5]

console.log(numbers.includes(1));//true

//indexOf
console.log(numbers.indexOf(3)); //2

//find
const users = [
    {name: 'Arthur', age: 19},
    {name: 'Hrant', age: 24},
    {name: 'Aram', age: 17}
]

const user = users.find((user)=> user.age > 18) //returns the first user that satisfies the condition
console.log(user);

//filter the same as find but returns an array of all users that satisfy the condition
const filteredUsers = users.filter((user) => user.age > 18)
console.log(filteredUsers); // [ { name: 'Arthur', age: 19 }, { name: 'Hrant', age: 24 } ]

//map
const names = users.map((user)=> {
    return user.name
})
console.log(names); // [ 'Arthur', 'Hrant', 'Aram' ]

//practic
const products = [
  { id: 1, title: "Ноутбук", price: 1200, isAvailable: true },
  { id: 2, title: "Мышь", price: 25, isAvailable: false },
  { id: 3, title: "Клавиатура", price: 150, isAvailable: true },
  { id: 4, title: "Монитор", price: 400, isAvailable: true }
];

let targetProduct = products.find((product) => product.id === 3);
console.log(targetProduct);

let cheapProducts = products.filter((product) => product.price < 200);
console.log(cheapProducts);

let productNames = products.map((name)=> name.title)
console.log(productNames);

let availableTitles = products.filter((available) => available.isAvailable).map((name)=> name.title)
console.log(availableTitles);

const newProducts = [
    {id: 1, title: "meat", price: 1200},
    {id: 2, title: "apple", price: 200},
    {id: 3, title: "bread", price: 350}
]

newProducts.sort((a,b)=> a.price - b.price)
console.log(newProducts);


let totalCost = newProducts.reduce((acc, amount)=> acc + amount.price, 0)
console.log(totalCost);

//set
const tags = ["javascript", "css", "html", "css", "javascript", "react"];

const uniqeArr = Array.from(new Set(tags))

console.log(uniqeArr)

//map
const john = { name: "John" };

let salary = new Map()

salary.set(john, 2500)

console.log(salary);
