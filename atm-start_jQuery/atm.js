$(document).ready(function(){
  setup();
});

var currentAccBalance = 0;
var savingsAccBalance = 0;

function setup() {
  inTheRed();
  $('input#deposit1').on('click', depositCurrent);
  $('input#deposit2').on('click', depositSavings);
  $('input#withdraw1').on('click', withdrawCurrent);
  // $('input#withdraw2').on('click', withdrawSavings);
}

function inTheRed() {
  if (currentAccBalance === 0) {
    $('#balance1').css({"background-color": "#F52F4F"});
    $('#account1.account').css({"background-color": "#FFFFFF"});
  } else {
    $('#balance1').css({"background-color": "#E3E3E3"});
    $('#account1.account').css({"background-color": "#6C9A74"});    
  }   
}

function depositCurrent() {
  var input = $('input#amount1').val(); //grabs user input from box
  currentAccBalance = (currentAccBalance+parseFloat(input)); // adds it the global variable.
  $('#balance1').html('$'+currentAccBalance); //updates the display value.
  inTheRed(); // checks if in the red.   
}

function withdrawCurrent() {
  var input = $('input#amount1').val();
  currentAccBalance = (currentAccBalance-parseFloat(input));
  if (currentAccBalance < 0) {
    balanceProtection(Math.abs(currentAccBalance)); // Sends the 'overdraft' amount to balance protection
    currentAccBalance = currentAccBalance + Math.abs(currentAccBalance); // puts balance back to 0.
    $('#balance1').html('$'+currentAccBalance); //updates the display value.
    inTheRed(); // checks if in the red/0.
  } else { 
  $('#balance1').html('$'+currentAccBalance); //updates the display value.
  inTheRed(); // checks if in the red/0.
  }
}

function balanceProtection(overdraft){
  console.log(overdraft);
}


function depositSavings() {
  var input = $('input#amount2').val(); //grabs user input from box
  savingsAccBalance = (savingsAccBalance+parseFloat(input)); // adds it the global variable.
  $('#balance2').html('$'+savingsAccBalance);
}



// function depositSavings() {
//   var input = $('input#amount2').val(); //grabs user input from box
//   savingsAccBalance = (savingsAccBalance+parseFloat(input)); // adds it the global variable.
//   $('#balance2').html('$'+savingsAccBalance);
// }







