module.exports.thMeter = (x) => {
    x = x / 100
    console.log("----------------------");
    console.log("" + +x * 39.37 + " นิ้ว")
    console.log("" + +x * 3.281 + " คืบ")
    console.log("" + +x * 2 + " ศอก")
    console.log("" + +x * 0.5 + " วา")
    console.log("" + +x * 0.025 + " เส้น")
    console.log("" + +x * 0.0000625 + " โยชน์")
    console.log("----------------------");
}

module.exports.enMeter = (x) => {
    x = x / 100
    console.log("----------------------");
    console.log("" + +x * 39.37 + " in")
    console.log("" + +x * 3.281 + " ft")
    console.log("" + +x * 1.093 + " yd")
    console.log("" + +x * 0.000621371192237 + " mi")
    console.log("----------------------");
}