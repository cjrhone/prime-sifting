
var testArray=[1];
var limit=0;
var prime=2;
var finalPrimes=[1];
var index=0;
var primeLoc=0;

function resetVariables(){
  testArray=[1];
  limit=0;
  prime=2;
  finalPrimes=[1];
  index=0;
  primeLoc=0;
}

function removeDivisible(){
  testArray.forEach(function(element){
    if (element%prime==0) {
      index=testArray.indexOf(element);
      testArray.splice(index,1);
    } else{}
  })
}


$(document).ready(function() {

  $("form#primeForm").submit(function(event) {
    //$('ul').empty();
    resetVariables();//resets variables so that function doesn't double append
    //gets userInput for limit number
    limit = parseInt($("#inputBox").val());

    //build array that includes all numbers from 1 up to user inputted number
    for(var x=2; x<=limit; x++){
       testArray.push(x);
    }

    do{
      prime = testArray[1];
      finalPrimes.push(prime);
      removeDivisible();
    } while (prime); //loop while numbers exist in the test array (not including 1)
    finalPrimes.pop();//removes extra element

    //$(".result").append("<li>"+finalPrimes+ "</li>");

    $('ul').append('<li>' +finalPrimes+ '</li>');

    event.preventDefault();

    $(".result").fadeIn();

  })
})
