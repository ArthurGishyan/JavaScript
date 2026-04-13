function getData() {
    return new Promise(function(resolve, reject) {
        setTimeout(() => {
            resolve('Data received')
        }, 3000)
    })
}

async function showData() {
    const data = await getData()
    console.log(data)
}
showData()

function userData() {
        return new Promise(function(resolve, reject) {
        setTimeout(() => {
            const isSuccess = Math.random() > 0.5;
            if (isSuccess) {
                resolve('Data received')
            } else {
                reject('Failed to receive data')
            }
        }, 1000)
    })
}

async function errorCheck() {
    try {
        const data = await userData()
        console.log(data)
    } catch (error) {
        console.error(error)
    }
}

errorCheck()