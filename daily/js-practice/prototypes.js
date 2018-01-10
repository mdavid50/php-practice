var foo = {
    a: 42
};

// create 'bar' and link it to 'foo'
var bar = Object.create(foo);

bar.b = "hello world";

bar.b;  // returns 'hello world'
bar.a;  // returns 42 because although bar has no a property, it is linked to foo