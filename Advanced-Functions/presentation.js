//Excecution Context
// 1function context == this
// 2depends on how the function is invoked
// 3Global invoke: func()  this == global
function myFunc() {
    console.log(this);
}
myFunc(); // this == global // this == window
//Object method : object.function()
const myObj = {
    myFunc
}
myObj.myFunc(); // this == object where the function is called

//DOM Event: element.addEventListener() this == element which trigger the event
document.querySelector('button').addEventListener('click', myFunc); // this == button

//Here Excecution Context is equal to this == button again , no matter we call myFunc from the myObj
document.querySelector('button').addEventListener('click', myObj.myFunc); // this == button

//4 call(), apply(), bind() -> We can manually say what the excecution context is

function testFunc(a, b) {
    console.log(this, a, b);
}
// apply()
testFunc.apply(myObj, [10, 20]); // here we change execution context from global to object
// call()
testFunc.call(myObj, 10, 20); // Simlar to apply. Here we change execution context from global to object
//bind => Bind makes copy of the function with my obj context and returns a copy of the original function
// In our memory storage we will have copy of testFunc and execution context myObj
const bindFunc = testFunc.bind(myObj);
bindFunc(10, 20); // execution context point to myObj and bindFunc is copy of testFunc


//First Class Functions => passed as an agrument to another function / returned by another function/ assigned as a value to a variable
//First Class Functions == Higer-Order Functions
//Predicate - function who returns true/false
//Pure Function - Returns the same result given same parameters

//Closure => The scope of an inner function  includes the scope of the outer function

function start() {
    let counter = 0;

    function increment(a) {
        counter += a;
        console.log(counter);
    }

    return increment; // return function with parameter
}

//Start function does not ask for parameters but our return value is function increment which asks for parameter 'a'
const myIncrement = start();
myIncrement(2);
myIncrement(2);
myIncrement(2);

