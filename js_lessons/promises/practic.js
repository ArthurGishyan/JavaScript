function setNickname(nickname) {
    return new Promise(function(resolve, reject) {
        setTimeout(()=> {
            if (nickname !== "") {
                resolve(`Your nickname is ${nickname}`)
            }
            else {
                reject(new Error("nickname is not found"))
            } 
        }, 1000)
    })
} setNickname("").then((message)=> {console.log("success: " + message);}).catch((error)=> {console.log("Error: " + error.message);
})

function getMathScore() {
    return new Promise(function(resolve, reject) {
        setTimeout(()=> {
            resolve('Math score: ' + 5)
        }, 2000)
    })
}

function getHistoryScore() {
    return new Promise(function(resolve, reject) {
        setTimeout(()=> {
            resolve('History score: ' + 3)
        }, 2000)
    })
}

Promise.all([getMathScore(), getHistoryScore()]).then(result => {console.log(result);})