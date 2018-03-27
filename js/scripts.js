
var testArray=[1];
var limit=0;
var prime=2;
var finalPrimes=[1];
var index=0;
var primeLoc=0;

//resets variables
function resetVariables(){
  testArray=[1];
  limit=0;
  prime=2;
  finalPrimes=[1];
  index=0;
  primeLoc=0;
}

//removes a number from the array if it is divisible by the prime number we are testing
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
    resetVariables();//resets variables so that function doesn't double append
    //gets userInput for limit number
    limit = parseInt($("#inputBox").val());
    //builds array that includes all numbers from 1 up to user inputted number
    for(var x=2; x<=limit; x++){
       testArray.push(x);
    }
    //runs this until the test array only has the one element in it
    do{
      prime = testArray[1]; //sets the prime variable to the item in the second location of the array
      finalPrimes.push(prime);//pushes the prime number to the array we are gonna display
      removeDivisible();
    } while (prime);
    finalPrimes.pop();//removes extra element
    $('ul').append('<li>' +finalPrimes+ '</li>');
    event.preventDefault();
    $(".result").fadeIn(); //shows the results
  })
})
