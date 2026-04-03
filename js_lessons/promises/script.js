let promise = new Promise(function(resolve, reject) {
    resolve(1);

    setTimeout(resolve(2), 1000)
});
 //we get 1 not 2 beacuse resolve and reject can be called once

async function delay(ms,secMs) {
   const promise= new Promise(function(resolve, reject) {

        setTimeout(resolve, ms)
    })
    const pr2= new Promise((resolve,reject)=>{
        setTimeout(resolve, secMs)

    })
    await promise
    console.log("xostumy katarvec!");
    
    return pr2
    
}
delay(3000,10000).then(()=> {
    console.log('resolved')
    ;})

//promise all Promise.all([array])
let myProm = Promise.all([
  new Promise(resolve => setTimeout(() => resolve(1), 3000)),
  new Promise(resolve => setTimeout(() => resolve(2), 2000)),
  new Promise(resolve => setTimeout(() => resolve(3), 1000)) 
]) //.then

let userName = new Promise(resovle => setTimeout(()=>{resovle('Arthur')}, 3000))
let userRole = new Promise(resovle => setTimeout(()=> {resovle('Admin')}, 2000))

Promise.all([userName, userRole]).then(
    result => {
        console.log('getting users and roles...');
        console.log(`User Name: ${result[0]}`);
        console.log(`User Role: ${result[1]}`);
    }
).catch(error => {
    console.log('sth went wrong...');
    
})

//promisefication
function oldGetDocument(docName, callback) {
    console.log("document search...");
    setTimeout(function() {
        let text = "we finded document: " + docName;
        callback(text);
    }, 2000);
}

function modernGetDocument(docName) {
    return new Promise(function(resolve, reject) {
        oldGetDocument(docName, (result)=> {
            resolve(result)
        })
    }) 
}
modernGetDocument('secret_files.txt').then(result => {console.log(result);
})

//async/await
console.log("Скрипт запущен!");
function accessCheck(nickname) {
    return new Promise(function(resolve, reject) {
        setTimeout(()=> {
            if (nickname === "admin") resolve("access success!")
            else reject(new Error("you dont have admin permission!"))
        }, 1000)
    })
}
async function recheckAccess(nickname) {
    try {
        let result = await accessCheck(nickname)

        console.log(result);
    } catch (error) {
        console.log(error.message);
        
    }
}
recheckAccess("admin")
recheckAccess("guest")