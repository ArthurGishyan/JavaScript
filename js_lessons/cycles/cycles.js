//we have 3 types of cycles
//while do sth while condition is true
let i = 0;
while (i < 10) {
    console.log(i);
    i++
} // 0,1,2,3,4,5,6,7,8,9

//do while same while but it do 1 iteration even condition is false
i = 0;
do {
  console.log(i);//0
  i++;
} while (i > 10);

//in for we can create variable
for(let i = 0; i<=10; i++) {
    console.log(i); //0-10
}
