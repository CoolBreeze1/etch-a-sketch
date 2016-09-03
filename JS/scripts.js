
$(document).ready(function(){

// sets the grid size to users choice
var $grid_size = alert("Choose a number of squares. below 60 for better usage.");
grid_reset($grid_size);
// takes user input and squares it for the size of the grid

//a function that generates random colours
function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;

};

// function for fade effect

function fadeInColor(){
  $(".square").mouseenter(function(){
    $(this).fadeTo(0, 0);
  });
  $(".square").mouseenter(function(){
    $(this).fadeTo(600, 1);
  });
}

// a function that generates a fresh grid
  function grid_reset(){
    $(".grid").empty();
    new_grid($grid_size);
    };

  function new_grid($grid_size){
    var $grid_size =prompt("How many squares would you like?");
    var size = 500 / $grid_size;
    var all_squares = $grid_size * $grid_size;
          for (var i = 0; i < all_squares; i++){
      $(".grid").append('<div class="square"></div>');
      }
        $(".square").width(size);
        $(".square").height(size);

      };

  $("#reset-normal").click(function(){
    grid_reset($grid_size);
    $(".square").hover(function(){
      $(this).css({"background-color" : "orange"});
    });
  });

  $("#reset-randomColor").click(function(){
    grid_reset($grid_size);
    $(".square").hover(function(){
      $(this).css({"background-color" : getRandomColor()});
    });

  });

  $("#reset-fadeInColor").click(function(){
    grid_reset();
    fadeInColor();
    });

  $(".square").hover(function(){
    $(this).css({"background-color" : "orange"});
  });



});
