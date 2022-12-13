const { template } = require('@babel/core')

function calculateBMI(weight, height) {
  return BMI = weight/(height*height)
}

function getBMIMeaning(weight, height) {
  let BMI = calculateBMI(weight, height)
  if (BMI < 18.5) return 'Underweight'
  if (BMI >= 18.5 && BMI <= 24.9) return 'Normal weight'
  if (BMI > 24.9) return 'Overweight'
}

module.exports = getBMIMeaning

// console.log(getBMIMeaning(65, 1.8))
// console.log(getBMIMeaning(100, 1.7))
// console.log(getBMIMeaning(44, 1.6))
