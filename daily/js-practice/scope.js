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