/**
 * safe mode keeps the code in a safer and more appropriate set of guidelines
 * it is also more optimizable by the engine
 */


//strict mode inside a function
function foo() {
    "use strict";

    // this code is strict mode

    function bar() {
        // this code is strict mode
    }
}

// this code is not strict mode


//strict mode for entire file
"use strict";

function foo() {
    // this code is strict mode

    function bar() {
        // this code is strict mode
    }
}

// this code is strict mode