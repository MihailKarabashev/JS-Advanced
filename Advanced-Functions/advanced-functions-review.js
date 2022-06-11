
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

//1
function area() {
    return Math.abs(this.x * this.y);
}

function vol() {
    return Math.abs(this.x * this.y * this.z);
}

function solve(area, vol, input) {
    let cubes = JSON.parse(input);
    let arr = [];

    for (const cube of cubes) {
        const cubeArea = area.call(cube)
        const cubeVolume = vol.call(cube);
        arr.push({
            area: cubeArea,
            volume: cubeVolume
        });
    }

    console.log(arr);
}

solve(area, vol, `[
    {"x":"1","y":"2","z":"10"},
    {"x":"7","y":"7","z":"10"},
    {"x":"5","y":"2","z":"10"}
    ]`)