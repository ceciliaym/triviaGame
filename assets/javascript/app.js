





$(document).ready(function(){
    $('#form').hide(); 
    $('#done').hide();
    

$('#buttonStart').on('click', () => {
    $('#start').hide();
    $('#form').show();
})

var number = 61;
var intervalId;
function run() {
    clearInterval(intervalId);
    intervalId = setInterval(decrement, 1000);
  }

  //  The decrement function.
  function decrement() {

    //  Decrease number by one.
    number--; 

    //  Show the number in the #show-number tag.
    $("#timer").html("You have " + number + " Seconds remaining!");
    if (number === 0) {
        $('#form').hide();
        $('#done').show();
    }

  }
  run();

  $('#submit').on('click',() =>{
      $('#done').show();
      $('#form').hide();
  })

  $('#again').on('click',() =>{
    $('#form').show();
    $('#done').hide();
    $('#star').hide();
    
    
})







    












})

