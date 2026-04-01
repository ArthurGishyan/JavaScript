function doMath(a,b, callback) {
    return callback(a, b)
}
const result = doMath(5,3, (x,y)=> x + y)
console.log(result);

let count = 0

function consolePrint(word, delay, callback) {
 const timer =  setInterval(() => {
    callback(word)
    count ++
 if(count===2) clearInterval(timer)
  
  }, delay);
  
 
}
 consolePrint('sth', 1000, (word)=> {console.log(word);
})

function greeting(text, callback) {
  
  callback('Arthur')
  return text
}

console.log(greeting('hello', (name)=> {console.log(name);}))

function checkPassword(password,delay, onSuccess, onError) {
  setTimeout(()=> {
    if(password === 'qwerty') onError('password is easy')
    else if(password.length <= 6) onError('password is too short')
    else onSuccess('autorized')
  },delay)
  console.log(password.length);
} 
checkPassword('agvsvhfeifhe', 5000, (success)=>{console.log(success);}, (error)=>{console.error(error)})
checkPassword('agvs', 5000, (success)=>{console.log(success);}, (error)=>{console.error(error)})
checkPassword('qwerty', 5000, (success)=>{console.log(success);}, (error)=>{console.error(error)})