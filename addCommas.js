function addCommas(number) {
    return number.toLocaleString('en-US')
}

console.log(addCommas(1234567))
console.log(addCommas(1234.567))
console.log(addCommas(-3141592.65))

module.exports = addCommas;