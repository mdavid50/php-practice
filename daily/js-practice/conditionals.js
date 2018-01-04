var bank_balance = 302.13;
var amount = 99.99;

if (amount < bank_balance) {
    console.log("I want to buy this phone");
}

const ACCESSORY_PRICE = 9.99;

var bank_balance = 302.13;
var amount = 99.99;

amount = amount * 2;

// check if we can afford the transaction, then reply yes if true
if ( amount < bank_balance) {
    console.log( "I'll take the accessory!");
    amount = amount + ACCESSORY_PRICE;
}

// if we can't afford it print no response
else {
    console.log( "No, thanks.");
}


/**
 * IF ELSE
 **/

if (a == 2) {
    console.log("num 2")
}
else if (a == 10){
    console.log("num 10")
}
else if (a == 42){
    console.log("meaning of life")
}
else {
    console.log("you have no meaning, lol!")
}

/**
 * SWITCH
 **/

switch (a){
    case 2:
        console.log("num 2");
            break;
    case 10:
        console.log("num 2");
        break;

    case 42:
        console.log("meaning of life");
        break;

    default:
        console.log("you have no meaning, lol!")
}

switch (a){
    case 2:
    case 10:
        console.log("some cool stuff");
        break;
    case 42:
        console.log("still the meaning of life");
        break;
    default:
        console.log("still no meaning")
}