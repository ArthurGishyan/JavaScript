document.body.style.backgroundColor = "#1C0E06"

let el = document.getElementById("greeting")

el.textContent = "JS hello"

el.style.color = "red"

el.style.backgroundColor = "yellow"

let tagElement = document.getElementsByTagName("p")

tagElement[0].style.backgroundColor = "red"

let btnFunct = document.getElementById("btn")
let boxFunct = document.getElementById("box")

let colorArr = ['green', 'red', 'blue']
let numberArr = [1,2,3,4,5,6,9,7,77,89,false,null,'gago',undefined,5]

let index = 0;

// while(index <= numberArr.length) {
//   //index = numberArr[index];
//   console.log(numberArr[index]);
//   index++;
// }

btnFunct.addEventListener("click", ()=> {
  index++;

  boxFunct.style.backgroundColor = colorArr[Math.floor(Math.random() * colorArr.length)];
  if(numberArr[index]) document.getElementById("show_num").innerHTML = numberArr[index];
  else document.getElementById("show_num").innerHTML = 'sth'
})

btnFunct.addEventListener("mouseover", ()=> {
  boxFunct.style.width = "1000px"
  boxFunct.style.height = "1000px"
})
btnFunct.addEventListener("mouseout", ()=> {
  boxFunct.style.width = "100px"
  boxFunct.style.height = "100px"
})
btnFunct.addEventListener("click", ()=> {
  body.backgroundColor = "red"
})