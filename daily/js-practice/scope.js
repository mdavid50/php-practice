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

// TRY/CATCH

try {
    undefined(); // illegal operation to force and exception!!
}
catch (err) {
    console.log( err ); // works!
}

console.log(err); // reference error: 'err' not found


// LET

// implicit block
var foo = true;

if (foo) {
    let bar = foo * 2;
    bar = something( bar );
    console.log( bar );
}

console.log( bar ); // reference error


//explicit block

var foo = true;

if (foo) {
    { // <-- explicit block!!! hooray!
        let bar = foo * 2;
        bar = something( bar );
        console.log( bar );
    }
}

console.log( bar ); // Reference Error



// GARBAGE COLLECTION

function process(data) {
    // do something interesting
}

var someReallyBigData = { . . };

process( someReallyBigData ); // not really needed but js will try to hold on to it.

bar btn = document.getElementById( "my_button");

btn.addEventListener("click", function click(evt) {
    console.log("button clicked");
}, /*capturingPhase=*/false);


// better way using block scoping

function process(data){
    // do something interesting
}

// anything declared inside this block can go away after!!
{
    let someReallyBigData = { . . };

    process( someReallyBigData );
}

var btn = document.getElementById("my_button");

btn.addEventListener("click", function click(evt){
    console.log("button clicked");
}, /*capturingPhase=*/ false );

// lET LOOPS

for (let i=0; i<0; i++){
    console.log( i );
}

console.log( i ); // ReferenceError

// let will be confine to the for loop but will remember the var for each iteration aka *pre-iteration binding*
{
    let j;
    for (j=0; j<10; j++){
        let i = j; // re-bound for each iteration!
        console.log( i );
    }
}


// CONST  -- sets a block-scoped variable that can not be changed--

var foo = true;

if (foo) {
    var a = 2;
    const b = 3; // block-scoped to the containing 'if'

    a = 3; // just fine!
    b = 4; // error!
}

console.log( a ); // 3
console.log( b ); // ReferenceError!!