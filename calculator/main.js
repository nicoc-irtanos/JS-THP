var op = []
function listener(number) {
  op.push(number)
  document.getElementById("header").innerHTML = op.join('')
}
function concat(number) {
  listener(number)
  var i = 0
  while (op[0] == 0) {
    op.splice(0, 1)
  }
  while (Number.isInteger(op[i])) {
    i += 1
  }
  op[0] = parseInt(op.slice(0,i - 1))
}
function re_zero() {
  op = []
  document.getElementById("header").innerHTML = "0"
}
function calcul() {

  var1 = op[0]
  var2 = op[2]
  switch (op[1]) {
    case "+":
      op = []
      op[0] = var1 + var2
      document.getElementById("header").innerHTML = op.join('')
      break;
    case "-":
      op = []
      op[0] = var1 - var2
      document.getElementById("header").innerHTML = op.join('')
      break;
    case "/":
      op = []
      op[0] = var1 / var2
      document.getElementById("header").innerHTML = op.join('')
      break;
    case "*":
      op = []
      op[0] = var1 * var2
      document.getElementById("header").innerHTML = op.join('')
      break;

    default:
      op = []
      op[0] = 0
      document.getElementById("header").innerHTML = op.join('')
      break;
  }
}
