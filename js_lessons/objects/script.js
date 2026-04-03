let user = {}

console.log(user);

user.name = "Arthur"

console.log(user);

user.sureName = "Gishyan"

console.log(user);

user.name = "John" 

console.log(user);

delete user.name

console.log(user);

let scedule = {

}

let bankAccount = {
    owner: 'Arthur',
    balance: 1000,
    deposit(amount) {
        this.balance = this.balance + amount
        console.log(`added ${amount} to balance`);
    }
}
setTimeout(bankAccount.deposit.bind(bankAccount, 200), 1000)
setTimeout(()=> {console.log(`balance is ${bankAccount.balance}`);

}, 2000)

let developer = {
    name: "Arthur",
    language: "Python",
    writecode(taskName) {
        console.log(`${this.name} do ${taskName} using ${this.language}`);
    }
}
developer.writecode("data parsing")

let anotherDev = {
    name: "Igor",
}

console.log(developer.writecode.call(anotherDev, "var creation"));
