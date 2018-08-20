function my_max(){

var array = []

var readline = require('readline');

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Entrez une liste de nombres : ", function(list) {
  array.push(list)
  var maximum = Math.max.apply(list);
  console.log("Le maximum de votre liste est :", maximum);

  rl.close();
});

}


function vowel_count(){
let vowels = ["a", "e", "i", "o", "u", "y"];

}

function reverse(){
}

my_max();
