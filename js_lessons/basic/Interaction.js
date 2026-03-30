//alert prompt and confirm

//alert displays a message and waits for the user to click the OK button.
alert('something');

//prompt is created to take value from user and it have defaoult value
let userAge = prompt('Enter your age: ', 18); //18 is value by default
console.log(`you are ${userAge} years old`);

//confirm shows question and 2 buttons ok and deny, ok is 1(true) deny is 0(false)
let isSpeakEnglish = confirm('Do you speak english?') //if ok in console we will see true else false

console.log(isSpeakEnglish);
