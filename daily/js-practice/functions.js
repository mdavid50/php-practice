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
