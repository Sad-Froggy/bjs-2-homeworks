"use strict";

console.log(calculateTotalMortgage(10, 0, 50000, 12)); // 52749.53
console.log(calculateTotalMortgage(10, 1000, 50000, 12)); // 51694.54
console.log(calculateTotalMortgage(10, 0, 20000, 24)); // 22149.56
console.log(calculateTotalMortgage(10, 1000, 20000, 24)); // 21042.09
console.log(calculateTotalMortgage(10, 20000, 20000, 24)); // 0
console.log(calculateTotalMortgage(10, 0, 10000, 36)); // 11616.19
console.log(calculateTotalMortgage(15, 0, 10000, 36)); // 12479.52

function solveEquation(a, b, c) {
  let arr = [];
  let d = Math.pow(b, 2) - 4 * a * c;

  if (d == 0) {
    let root = -b / (a * 2);
    arr.push(root)
  } else if (d > 0) {
    let root1 = (-b + Math.sqrt(d) )/(2*a);
    let root2 = (-b - Math.sqrt(d) )/(2*a);
    arr.push(root1, root2);
  }

  return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {

  if (typeof percent !== "number" || typeof contribution !== "number" || typeof amount !== "number" || typeof countMonths !== "number") {
    percent = parseFloat(percent);
    contribution = parseFloat(contribution);
    amount = parseFloat(amount);
    countMonths = parseFloat(countMonths);

    if (isNaN(percent) || isNaN(contribution) || isNaN(amount) || isNaN(countMonths)) {
      return false;
    }
  }

  let monthlyPercent = percent / 100 / 12;

  let loanBody = amount - contribution;

  if (loanBody <= 0) {
    return 0;
  }

  let monthlyPayment =
    loanBody *
    (monthlyPercent +
      monthlyPercent / ((1 + monthlyPercent) ** countMonths - 1));

  let totalAmount = monthlyPayment * countMonths;

  let roundedTotalAmount = Math.round(totalAmount * 100) / 100;
  
  return roundedTotalAmount;

}
