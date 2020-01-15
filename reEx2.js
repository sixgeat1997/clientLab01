module.exports.calBMI = (w, h) => {
    h = h / 100
    let x = w / (h * h)
    let c
    if (x < 18.5) {
        return c = "น้ำหนักน้อย / ผอม"
    }
    if (x >= 18.5 && x < 23) {
        return c = "ปกติ (สุขภาพดี)"
    }
    if (x >= 23 && x < 25) {
        return c = "ท้วม / โรคอ้วนระดับ 1"
    }
    if (x >= 25 && x < 30) {
        return c = "อ้วน / โรคอ้วนระดับ 2"
    }
    if (x > 30) {
        return c = "อ้วนมาก / โรคอ้วนระดับ 3"
    }
}

module.exports.pond = (w) => w = w * 2.20462262
module.exports.foot = (h) => h = h * 3.281 / 100