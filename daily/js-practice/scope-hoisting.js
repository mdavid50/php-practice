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
 * of the code. it can be thought of as the functions and declarations are HOISTED to the top. Otherwise code is
 * read top to bottom in order.
 */

/*
 *ASSIGNMENTS (i.e.- a = 2;) are something different. they are executed. they are not brought to the top of the code.
 *they remain in place to be executed later.
 */


foo();

function foo() {
    console.log(a); //undefined

    var a =2;
}
// because the declaration of function foo() is hoisted to the top (which includes the implied value of var a = 2;)
// the foo(); call is able to execute even though it has come before declaration of function foo()
