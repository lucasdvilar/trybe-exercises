const angle1 = 30
const angle2 = 100
const angle3 = 50

if (angle1 > 0 && angle2 > 0 && angle3 > 0) {
    if ((angle1 + angle2 + angle3) === 180) {
        console.log("true")
    } else {
        console.log("false")
    }
} else {
    console.log("error")
}