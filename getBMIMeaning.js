// const { template } = require('@babel/core')

function calculateBMI(weight, height) {
  return weight/(height*height)
}
function getBMIMeaning(weight, height) {
  if(calculateBMI(weight, height) < 18.5) {
    return "Underweight"
  } else if(18.5 < calculateBMI(weight, height) && calculateBMI(weight,height) < 24.9) {
    return "Normal weight"
  } else if(25 < calculateBMI(weight, height)) {
    return "Overweight"
  }
}
// module.exports = getBMIMeaning

console.log(getBMIMeaning(65, 1.8))
console.log(getBMIMeaning(100, 1.7))
console.log(getBMIMeaning(44, 1.6))
