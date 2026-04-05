const player = {
    nickname: "Player1",
    level: 1,
    health: 100,
    inventory: ["sword", "shield"],
    attack() {
        console.log(`${this.nickname} attack using ${this.inventory[0]}`)
    },
    takeDamage(damage) {
        this.health -= damage;
        if (this.health <= 0) {
            this.isAlive = false;
            console.log(`${this.nickname} has been defeated!`);
        } else {
            console.log(`${this.nickname} took ${damage} damage, remaining health: ${this.health}`);
        }
    }
}

player.attack();
player.takeDamage(30);
player.takeDamage(80);
player.level += 1;
player.inventory.push("poison");
player.isAlive = true;

console.log(player);
