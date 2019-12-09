const add = function (x, y) {
  return x + y;
}

const substract = function (x, y) {
  return x - y;
}

const multiply = function (x, y) {
  return x * y;
}

const divide = function (x, y) {
  return x / y;
}

const operate = function (operator, x, y) {
  if (operator === '+') {
    return add(x, y)
  } else if (operator === '-') {
    return substract(x, y)
  } else if (operator === '*') {
    return multiply(x, y)
  } else if (operator === '/') {
    return divide(x, y)
  }
}
