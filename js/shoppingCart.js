let shoppingCart = ['banana', 'banana', 'royal gala', 'watermelon'];
shoppingCart.forEach( fruit => console.log( fruit ));
// simple way to show the full array as a list

let total = shoppingCart.push("blueberry", "green apple");

shoppingCart.forEach( fruit => console.log( fruit ));
// simple way to show the full array as a list
// <!-- Det känns rörigt att jag skapar,  'fruit'
// hur kommer set sig?    -->





shoppingCart.forEach(function(fruit, index){
    console.log(`Shopping cart: ${fruit}, index: ${index}`);
});
// more complex way show a list with texts




//let shoppingFind = shoppingCart.find(
//    fruit => fruit.shoppingFind > banana
//);




//let fruitsLeft;
//[,, ... fruitsLeft] = shoppingCart;

//console.log(shoppingCart)



//let watermelon = {  id: 'half', style: 'chopped' };
//let id, style;

//({id, style} = watermelon);

//console.log(id, style);


//let fruitCount = [7, 3, 1];
//let [banana, royalGala, watermelon] = fruitCount;
// let banana, royalGala, theRest;
//[, royalGala, ...theRest] = fruitCount;



// FUNCTION START CARS
// function startCars(car1, car2, car3, ...rest) {
//    console.log(rest);
//}

// let carIds = [1, 2, 3, 4, 5, 6];
// startCars(...carIds);




// Unary operators
// med hjälp av unary operators kan jag lägga till fler
// frukter eller ta bort i kundkorgen.

// ADDITION STRAWBERRIES 
//let strawberry = 12;
//console.log(++strawberry);
// add one strawberry, from 12 to 13
//console.log(--strawberry);
// remove one number from strawberry 