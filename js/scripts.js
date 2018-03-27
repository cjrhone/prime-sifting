var input;
var testArray=[1];
var start=0;
var prime=2;
var finalPrimes=[1];
var index=0;
var primeLoc=0;


function removeDivisible(){
  testArray.forEach(function(element){
    if (element%prime==0) {
      index=testArray.indexOf(element);
      testArray.splice(index,1);
    } else{}
  })
}


$(document).ready(function() {
  // for(var x=2; x<=start; x++){
  //   testArray.push(x);
  // }
  // console.log(testArray);

  $("form#primeForm").submit(function(event) {

    var start = parseInt($("#inputBox").val());



    for(var x=2; x<=start; x++){
       testArray.push(x);
    }

    
      prime = testArray[1];
      finalPrimes.push(prime);
      removeDivisible();


      // prime = testArray[1];
      // finalPrimes.push(prime);
      // removeDivisible();
      // prime = testArray[1];
      // finalPrimes.push(prime);
      // removeDivisible();

      alert(finalPrimes);




    console.log(testArray);

    event.preventDefault();

$(".result").fadeIn();

  })
})
