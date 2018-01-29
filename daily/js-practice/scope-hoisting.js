/*
* HOISTING
* the argument  of the egg before the chicken
 */

a = 2;

var a;

console.log(a);  // output will be 2


// also

console.log( a ); // will return undefined

var a = 2;



/*
 * the egg (declaration) comes before the chicken ( assignment )
 * functions and declarations are hoisted to the top of the code. they are compiled by the engine before execution
 * of the code. it can be thought of as the functions and declarations are HOISTED to the top
 */

//

