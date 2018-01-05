function  foo() {
    console.log( this.bar);
}

var bar = "global";

var obj1 = {
    bar: "obj1",
    foo: foo()
};

var obj2 = {
    bar: "obj1"
};

foo();                  // "global"
obj1.foo();             // "obj1"
foo.call( obj2);        // "obj2"
new foo();              // undefined -- has not been set