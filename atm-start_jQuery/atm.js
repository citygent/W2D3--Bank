$(document).ready(function(){
  console.log('Good evening Mr Phelps');
  setup();
});

function setup() {
  $('input#deposit1').on('click', depositCurrent);
  $('input#deposit2').on('click', depositSavings);
  $('input#withdraw1').on('click', withdrawCurrent);
  $('input#withdraw2').on('click', withdrawSavings);
}

var currentAccBalance = 0;
var savingsAccBalance = 0;

function depositCurrent() {
  var input = $('input#amount1').val(); //grabs user input from box
  currentAccBalance = (currentAccBalance+parseFloat(input)); // adds it the global variable.
  //update the display.
  $('#balance1').html('$'+currentAccBalance);
}

function depositSavings() {
  var input = $('input#amount2').val(); //grabs user input from box
  savingsAccBalance = (savingsAccBalance+parseFloat(input)); // adds it the global variable.
  //update the display.
  $('#balance2').html('$'+savingsAccBalance);
}


