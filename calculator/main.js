$(".btn").click(function(event){
  var clicked = this.innerHTML
  console.log("you clicked: ", clicked)
  $(".header").html(clicked)
})
alert("Hello")
