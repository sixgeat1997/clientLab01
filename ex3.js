let Meter = require('./reEx3')
let stdin = process.openStdin()
let i = 0
let a, b, x
console.log("มาตราวัดระยะไทย --> 1");
console.log("มาตราวัดระยะอังกฤษ --> 2");
console.log("Input (cm) =");
stdin.addListener("data", (str) => {
    if (i == 0) {
        a = str
        console.log("เลือกหน่วย =");

    }
    else {
        b = str
        if (b == 1) {
            Meter.thMeter(a)
        }
        else if (b == 2) {
            Meter.enMeter(a)
        }
    }
    i++
})