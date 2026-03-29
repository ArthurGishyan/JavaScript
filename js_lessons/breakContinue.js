//break stops cycle
for (let i = 0; i < 10; i++) {
    if(i == 6) {
        console.log(i);
        break;
    }
} //it stopped because of 6

//continue skip one iteration
for (let i = 0; i <= 10; i++) {
    if (i == 6) {
        continue
    }
    console.log(i); //0  1  2  3  4  5  7  8  9 10
}