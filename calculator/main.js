var op = []
function listener(number) {
  op.push(number)
  document.getElementById("header").innerHTML = op.join('')
}
function re_zero() {
  op = []
  document.getElementById("header").innerHTML = "0"
}
function calcul() {
  while (op[0] == 0) {
    op.splice(0,1)
  }
  op.unshift(0)
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
