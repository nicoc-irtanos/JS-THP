function my_max(arry) {
  var local_max = arry[0]
  console.log(arry.length)
  for (var i = 0; i < 7; i++) {
    if (local_max < arry[i]) {
      local_max = arry[i]
    }
    console.log(local_max)
  }
}
function vowel_count(string) {
  var m = string.match(/[aeiou]/gi);
  // g for whole string, i to make it case insensitive
  return m === null ? 0 : m.length;
  // return null if m = 0 
}

function reverse(string) {
  console.log(string.split('').reverse().join(''))
}
owo = "oklm"
reverse(owo)