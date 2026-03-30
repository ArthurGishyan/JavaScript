//function decloration

// function checkAge(age) {
//     age = +prompt('enter your age: ')
//     if (age >= 18) {
//         return 'you are allowed'
//     }

//     return confirm('Are you sure?')//true or false
// }

// console.log(checkAge())

//callback functions
let ask = function(question, yes, no) {
    // question = confirm('are you 18 years old?')
    if(confirm(question)) {
        yes()
    } else {
        no()
    }
};

function callAskYes() {
    console.log('Access allowed');
    
}

function callAskNo() {
    console.log('Access denied');
}

// ask('Do you agreed?', callAskYes, callAskNo)

//we can do it shorter
ask('Are you 18 years old?', 
    function() {alert('you agreed')},
    function() {alert('you disagreed')}
)

//arrow functions
let checkArmeniaCap = (capital, yes, no) => {
    if (capital == 'Yerevan') {
        yes()
    } else {
        no()
    }
} 
checkArmeniaCap(prompt('enter the capital of Armenia'),
    () => {console.log('right');},
    () => {console.log('false');}
)