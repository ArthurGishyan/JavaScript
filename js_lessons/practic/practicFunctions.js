function makeCofee(coffeName, callback){
    console.log(`we are making ${coffeName}, please wait...`);
    setTimeout(()=>{
        callback(`your ${coffeName} is done`)
    }, 5000)
} makeCofee("Latte", (message)=>{
    console.log(message);
})

//recursion
function countDown(number) {
    if (number <= 0) return 1;
    else {
        console.log(`number: ${number}`);
    }  
    return countDown(number -1)
} 
countDown(5)

//promise line
function startCalculation() {
    return new Promise(function(resolve, reject) {
        setTimeout(()=> {
            resolve(5)
        }, 1000)
    })
} 
startCalculation().then((number)=> {
    return number *2
}).then((number2)=> {
    let num2 = number2 * 2
    console.log(`step 2: ${num2}`);
    return num2
}).then((number3)=> {
    let num3 = number3 * 2
    console.log(`step 3: ${num3}`);
    return num3
}).then((result)=> {
    console.log(`result: ${result}`);
})

//throw new Error
function checkAccess(password) {
    return new Promise(function(resolve, reject) {
        setTimeout(()=> {
            if(password === "admin") resolve("Accepted")
            else reject(new Error("You dont have admin permission"))
        },1000)
    })
}
async function login(password) {
    try {
        let result = await checkAccess(password);
        console.log(result);
    } catch (error) {
        console.log(error.message);
    }
}

login("admin") //Accepted
login("wrong pass") //You dont have admin permission