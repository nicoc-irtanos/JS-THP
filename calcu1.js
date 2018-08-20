function my_max(array){
console.log("Le plus grand nombre est " + Math.max(...array));
}

function vowel_count(string){

var arr = string.split('');
  var i = 0;
arr.forEach(function(element){
  var vowels = ["a", "e", "i", "o", "u", "y"];
  if (vowels.includes(element)){
    i = i + 1;
  }
})
console.log("Le nombre de voyelles est "+ i)
}

function reverse(string){
  var arr = string.split('');
  var reversed = arr.reverse();
  var revstring = reversed.join('')
  console.log(revstring)
}

my_max([1,2,1000,278,45,2,1456,235,245,54,79,12316,50,47,9,632]);

vowel_count("hello")

reverse("Bonjour Monde !")
