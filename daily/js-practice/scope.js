function one() {

    var a =1;
    console.log( a );
}

function two() {

    var a = 2;
    console.log(a);

}

one();
two();


function outer() {
    var a = 1;

    function inner() {
        var b = 2;

        //can access both a and b because the they are both within the function
        console.log(a + b);
    }

    inner();

    //can't access b from outside the inner function
    console.log( a );
}

outer();


/**
 *Hiding
 * this is the proper way to enclose variables. it shows the least possible to the rest of the functions
 */

function doSomething(a) {
    function doSomethingElse(a) {
        return a -1;
    }

    var b;

    b = a + doSomethingElse(a*2);

    console.log(b*3);
}

doSomething(2); // 15


//reasons for hiding variables are also good for COLLISION AVOIDANCE

function foo() {
    function bar(a) {
        i = 3; // this will reset i back to 3 every time the a loop is run -- NOT GOOD--
        console.log( a + i );
    }

    for (var i=o; i<10; i++) {
        bar( i * 2);// creates an infinite loop. i will always be rest to 3
    }
}

foo(); // solution is to declare i a var so it can change as needed.



//FUNCTIONS AS SCOPE

var a = 2;

function foo() {

    var a = 3;
    console.log(a);// 3

}
foo();

console.log(a);// 2


// Anonymous vs Named -- Named is better in case you would like to recall the function

setTimeout( function  timeoutHandler() { // this is named time out handler
    console.log( "I waited 1 second!");
}, 1000 );



//Invoking Function Expressions Immediately
var a = 2;
(function IIFE() {
    var a = 3;
    console.log( a ); // 3
})();

console.log( a ); // 2

var a = 2;

(function IIFE( global) {
    var a = 3;
    console.log(a);// 3
    console.log(global.a); // 2
})(window);

console.log( a ); // 2



/**
 * BLOCK AS SCOPES
 **/

