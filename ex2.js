let cal = require('./reEx2')
let stdin = process.openStdin()
let i = 0
let a, b, x

console.log("น้ำหนัก =");


stdin.addListener("data", (str) => {
    if (i == 0) {
        a = str
        console.log("ส่วนสูง = ");
    }
    else {
        b = str
        x = cal.calBMI(a, b)
        console.log("----------> " + x + " <----------")
        console.log("" + +a + " กิโลกรัม = " + cal.pond(a) + " ปอนด์")
        console.log("" + +b + " เซนติเมตร = " + cal.foot(b) + " ฟุต")

    }
    i++
})


