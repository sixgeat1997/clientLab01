let stdin = process.openStdin()
let price, discont, i = 0

console.log("Original Price");

stdin.addListener("data", (str) => {
    if (i == 0) {
        price = str
        console.log("Discount(% off)");

    }

    else {
        discont = str
        disCount(price, discont)
    }
    i++
})

disCount = (price, discont) => {
    let pOff, finalP
    pOff = (price * discont) / 100
    finalP = price - pOff
    console.log("Final Price ");
    console.log(finalP)

}