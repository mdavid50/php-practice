function printAmount() {
    console.log( amount.toFixed(2));
}

var amount = 99.99;

printAmount();

amount = amount * 2 ;

printAmount();


function  printAmount(amt) {
    console.log( amt.toFixed(2));
}

function formatAmount() {
    return "$" + amount.toFixed(2);
}

var amount = 99.99;

printAmount(amount * 2);

amount = formatAmount();
console.log( amount );

const TAX_RATE = 0.08;

function calculateFinalPurchaseAmount(amt) {
    //add the tax rate to amount
    amt = amt +(amt * TAX_RATE);

    return amt;
}
//set amount price to...
var amount = 99.99;

amount = calculateFinalPurchaseAmount(amount);

//return the amount with tax
console.log( amount.toFixed(2));


// new function foo
function foo() {
    return 42;
}

foo.bar = "hello world";

typeof foo;

typeof foo();

typeof foo.bar;


/**
 * FUNCTIONS AS VALUES
 * functions are basically variables. they contain a set of values but can be a value itself
 */

//anonymous... it has no name
var foo = function (){
    //..
};

//named bar. --this is preferable--
var x = function bar() {

}



/**
 *IMMEDIATELY INVOKED FUNCTION EXPRESSIONS (IIFEs)
 * a way to execute a function. short hand ish
 **/

(function IIFE() {
    console.log("hello!");
})(); // <- this runs the function


var a = 42;

(function IIFE() {
    var a = 10;
    console.log( a );  // returns 10
})();

x;  // returns 42


//having return values
var x = (function IIFE() {
    return 42;
})();

x; // returns 42


/**
 * CLOSURE
 * closure basically says to remember and do an action on
 **/

function makeAdder(x) {
//this makes an inner var of x

//an inner function will then use the var x, it remembers it or has closure over it
    function add(y) {
        return y + x;
    };

    return add;
}

var plusOne = makeAdder(1);

var plusTen = makeAdder(10);

plusOne( 3 ); // remembers the x or (1) from plusOne and used ( 3 ) as y --= 4 --
plusOne( 41 );// remembers the x or (1) from plusONe and used ( 41 ) as y --= 42--

plusTen( 13 );// remembers the x or (10) from plusTen and used ( 13 ) as y --= 23--


