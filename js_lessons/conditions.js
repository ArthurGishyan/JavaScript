//if else else if
let userAge = +prompt('Enter your age: ')

if (userAge == 18) {
    console.log('You are 18 years old');
} else if (userAge < 18) {
    console.log('You are child');
} else {
    console.log('You are adult');
}

//another type
let access = (userAge >= 18) ? console.log('access allowed') : console.log('access denied');

