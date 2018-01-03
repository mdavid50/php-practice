var amount = 99.99;
// change amount * 2
amount = amount * 2;
//return
console.log( amount );
//make it human worthy (and explicitly coerse amount)
amount = "$" + String( amount );
//return
console.log( amount );


//set tax rate as constant
const TAX_RATE = 0.08; // 8% sales tax

var amount = 99.99;

amount = amount * 2;

amount = amount + (amount* TAX_RATE);

console.log( amount );
console.log( amount. toFixed( 2 ) );



