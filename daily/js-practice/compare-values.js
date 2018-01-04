/**
 * EXPLICIT COERCION
 **/
// set variables, one a string and one a number
var a = "42";
//explicit coercion to a num
var b = Number(a);

//return a
a;

// return b
b;


/**
 *IMPLICIT COERCION
 **/
//set var a to string
var a = "42";

//implicit coercion to a num
var b = a * 1;

//return a
a;

// return b
b;


/**
 *TRUTHY FALSY
 * anything negative is generally falsy ie "", null, undefined, false, 0, -0, NaN
 *
 * any other is truthy ie true, number, string, arrays[], objects{}, functions(){}
 **/


/**
 * EQUALITY
 **/

//set var a to string 42
var a = "42";

//set var b to number 42
var b = 42;

a == b; //will return true

a ===b; //will return false