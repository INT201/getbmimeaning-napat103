const { template } = require('@babel/core')

function calculateBMI(weight, height) {
  let BMI = weight/(height*height)
  return BMI
}

function getBMIMeaning(weight, height) {
  if (calculateBMI(weight, height) < 18.5) return 'Underweight'
  if (calculateBMI(weight, height) >= 18.5 && calculateBMI(weight, height) <= 24.9) return 'Normal weight'
  if (calculateBMI(weight, height) > 24.9) return 'Overweight'
}

module.exports = getBMIMeaning

// console.log(getBMIMeaning(65, 1.8))
// console.log(getBMIMeaning(100, 1.7))
// console.log(getBMIMeaning(44, 1.6))
