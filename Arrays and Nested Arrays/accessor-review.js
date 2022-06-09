//Accessor Methods => Theese methods won't change the original array

let nums = [10, 20, 30, 40];
let num2 = [50, 60, 70, 80];

// Join
nums.join(', ');

//Concat => The concat method is used to merge two or more arrays
let result = nums.concat(num2); // It will return new array with all values from both arrays. Does not change the existing arrays

//Slice => Ruturns a shallow copy of a portion of an array into a new array object selected from begin to end (end not included)
let sliceArr = nums.slice(1, 3); // First parameter is where to start. Secound parameter is where to stop - 1;
let sliceArrShallowCopy = nums.slice(); // Make copy of the array into new array

//Includes => Determinates whether an array contains a certain element, returning true or false as appropriate
nums.includes(10); // If yes should return True. If not should return False
nums.includes(10, 1); // Check whether the array contains 10  starting from 1 index

//IndexOf => Returns the first index at which a given element is found in the array. If element is not presented should return -1
nums.indexOf(10); // Index of 10 is 1
nums.indexOf(3000); // There is not element with value of 3000. The result should be -1
nums.indexOf(10, 1); // We can check wether element 10 is presented inside the array starting from 1 index


//Map => Creates a new array with the results of calling a provided function on every element in the calling array
let res = nums.map(x => x / 2); // Returns new array . Does not change old array. We can calculate in the callback func

//Some => test whether at least one element in the array passes the implemented by the provided function. Result is boolean
let someResult = nums.some(x => x % 2 == 0); // If element is even the result should be True, if not False

//Includes vs Some => Includes works with value / Some works with function

//Find => Return the first found value in the array ,if an element in the array satistfies the provided testing function or undefined if not 
let findValue = nums.find(x => x > 10); //Returns 20 because this is the first value which is bigger than 10 in our array
let undValue = nums.find(x => x > 10000); //Returns undifined

//Filter => Creates a new array with filtered elements only. Calls a provided callback function once for each element in an array
//Does not mutate the array on which it is called

let filterdArray = ['Apple', 'Mango', 'Orange'].filter(x => x.toLocaleLowerCase().startsWith('A')); // Returns array with the result

//Reduce => The purpose of reduce is to get an array and transform it to single output value

function pieFunc(array, first, secound) {
    let firstIndex = array.indexOf(first);
    let secoundIndex = array.indexOf(secound);
    let result = array.slice(firstIndex, secoundIndex + 1);

    console.log(result);
}

pieFunc(['Apple Crisp', 'Mississippi Mud Pie', 'Pot Pie', 'Steak and Cheese Pie', 'Butter Chicken Pie', 'Smoked Fish Pie']
    , 'Pot Pie',
    'Smoked Fish Pie');

const oddPositionFunc = (array) => {
    return array.filter((x, i) => i % 2 != 0)
        .map(x => x * 2)
        .reverse()
        .join(' ');
}

console.log(oddPositionFunc([10, 15, 20, 25]));
console.log(oddPositionFunc([3, 0, 10, 4, 7, 3]));

