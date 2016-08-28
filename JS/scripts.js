
$(document).ready(function(){

//create a table
var $grid_size = prompt("You can choose upto 16 squares vertically and horizontally, how many would you like?");
var all_squares = $grid_size * $grid_size;

  for (var i = 0; i < all_squares; i++){
    $(".grid").append('<div class="square"></div>');

  };

  var square_dimension = 500 / $grid_size
  $(".square").css({"width" : square_dimension, "height" : square_dimension});

  $("#reset").click(function(){
    location.reload("true");
  });

  $(".square").hover(function(){
    $(this).css({"background-color" : "red"});
  });



});
