
//coding step 1
var ages = [3, 9, 23, 64, 2, 8, 28, 93]; {

    ages.push(21)
   let lastAge = ages[ages.length - 1];
   let firstAge = ages[0];
    console.log(lastAge - firstAge)

    let totalSum = 0;
    let nums = ages.length;
    
    for (let i = 0; i < ages.length; i++) {

     (totalSum += ages[i]);

      average = totalSum / nums
       
    }
    console.log("The Average Number is " + average)
   
}

//coding step 2

var names = ["Sam", "Tommy", "Tim", "Sally", "Buck", "Bob"]; {

let averageCharacters = 0;



    for (let i = 0; i < names.length; i++) {
        
        averageCharacters += (names[i].length/ names.length);

    }

    console.log("The Average Characters per name = " + averageCharacters);
    console.log( names.concat(" ") );


}

//coding step 5
var nameLenghts = [] 
    for (let i = 0; i < names.length; i++) {
        nameLenghts.push(names[i].length);
    }
    

    //coding step 6
let sumOfName = 0;
for(i = 0; i < nameLenghts.length; i++) {
    sumOfName += nameLenghts[i];
}
   console.log (sumOfName);


//coding step 7
   function twoParameters (word, n) {
    let space ="";
    for( let i = 1; i <= n ; i ++){
        space += word;
    }
    return space;
   }
   console.log( twoParameters("Coding is hard!!!! But it is fun. ", 4));



   //coding step 8
   function fullName(firstName, lastName) {
    return (firstName + " " + lastName)
   }

   console.log (fullName( "Chance", "Bowman"));


   //coding step 9

   function numArray(arrayX) {
    let sum = 0;
    for (let i = 0; i < arrayX.length; i++) {
        sum += arrayX[ i ];
    } 
    if (sum >100) {
        return true;
    } else 
        return false;
   }
   console.log(numArray( [10, 20, 5, 6, 40, 3]));


   //coding step 10
   function avrg(arrayY) {
    let sum = 0
    for (let i = 0; i < arrayY.length; i++) {
        sum += arrayY[i];
    }
    return (sum / arrayY.length);
   }
   console.log( avrg([1, 5, 8, 6, 4, 6]))

   //coding step 11
   function greaterThan(a , b) {
    if(avrg (a) > avrg (b)) {
        return true;
    }
        return false;
   }

console.log( greaterThan( [ 1, 2, 3, 4, 5 ], [ 2, 3, 4, 5, 6 ] ) );
console.log( greaterThan( [ 10, 11, 12 ], [ 9, 8, 7 ] ) );
    
//coding step 12

function willBuyDrink( isHotOutside, moneyInPocket ){
    if( isHotOutside === true && moneyInPocket > 10.50 ){
        return true;
    }
    return false;
}

console.log( willBuyDrink( false, 12.50 ) );
console.log( willBuyDrink( true, 22.30 ) );
console.log( willBuyDrink( true, 10.45 ) );

//coding step 13
//I am writing this fuction to determine if i will need a coat outside, whcih is true if weather is lower then 50 or it is raining outside. 

    function willWearCoat (weatherOutside, rainingOutside) {
        if (weatherOutside < 50 || rainingOutside === true) {
            return true;
        }
        return false;

    }

    console.log(willWearCoat( 60, true))
    console.log(willWearCoat( 48, false))
    console.log(willWearCoat( 55, false))