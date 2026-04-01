let promise = new Promise(function(resolve, reject) {
    resolve(1);

    setTimeout(resolve(2), 1000)
});

promise.then(alert) //we get 1 not 2 beacuse resolve and reject can be called once

async function delay(ms,secMs) {
   const promise= new Promise(function(resolve, reject) {

        setTimeout(resolve, ms)
    })
    const pr2= new Promise((resolve,reject)=>{
        setTimeout(resolve, secMs)

    })
    await promise
    console.log("xostumy katarvec!!!!!!!!");
    
    return pr2
    
}
delay(3000,10000).then(()=> {
    console.log('resolved')
    ;})