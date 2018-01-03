var bank_balance = 302.13;
var amount = 99.99;

if (amount < bank_balance) {
    console.log("I want to buy this phone");
}

const ACCESSORY_PRICE = 9.99;

var bank_balance = 302.13;
var amount = 99.99;

amount = amount * 2;

// check if we can afford the transaction
if ( amount < bank_balance) {
    console.log( "I'll take the accessory!");
    amount = amount + ACCESSORY_PRICE;
}

// if we can't afford it
else {
    console.log( "No, thanks.");
}