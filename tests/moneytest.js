import {formatCurrency}  from '../scripts/utils/money.js'

console.log('Test Suite: format currency')
console.log('Convert cents into dollars');


if (formatCurrency(2095) === '20.95' ) {
  console.log('Passed')
} else {
  console.log('Failed')
}

console.log('Works with 0')

if (formatCurrency(0) === '0.00') {
  console.log('Passed')
} else{
  console.log('Failed')
}


console.log('Test Suite: Rounding off')
console.log('check if the code rounds up to the nearest cent')

if (formatCurrency(2000.5) === '20.01'  ) {
  console.log('Passed')
} else {
  console.log('Failed')
}

if (formatCurrency(2000.4) === '20.00') {
  console.log('Failed')
} else {
  console.log('Failed')
}
