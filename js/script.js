// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************

//GLOBAL VARIABLES
/* global $ */
var computerChoice="";
var winner="";
var randomNumber="0";
var userChoice="";

// DOCUMENT READY FUNCTION BELOW
$("#shoot").click(function(){
    userChoice=$("#input").val()
    $("#userChoice").text(userChoice);
    
    var randomNumber=Math.floor(Math.random()*4);    
    if (randomNumber === 1){
    $("#computerChoice").html("Paper");
    }else if (randomNumber === 2){
    $("#computerChoice").html("Rock");
    }else if (randomNumber === 3){
    $("#computerChoice").html("Scissors"); 
    }
    
});
