const TAX_RATE = 0.08;
const PHONE_PRICE = 99.99;
const ACCESSORY_PRICE = 9.99;
const SPENDING_THRESHOLD = 500.00;

var bank_balance = 700.00;
var amount = 0;

// add tax
function calculateTax(amount) {
    return amount * TAX_RATE;
}

// format for humans
function formatAmount(amount) {
    return "$" + amount.toFixed(2);
}

//buy the phones as long as we got the dough!!
while (amount< bank_balance){
    //buy new phone
    amount = amount_+ PHONE_PRICE;

    // see if we can afford accessories
    if(amount< SPENDING_THRESHOLD){
        amount = amount + ACCESSORY_PRICE;
    }
}

//pay uncle sam
amount = amount + calculateTax(amount);

console.log( "Total price is" + formatAmount(amount));

// check it against bank balance
if(amount > bank_balance) {
    console.log("Too Rich for my blood");
}

