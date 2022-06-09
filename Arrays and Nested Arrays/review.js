// for - the standart one -> you have access to the index
// for-of loop (foreach in C#) -> arrays () -> you don't have access to the index
// for-of loop -> objects
//destructuring/ rest operator => let aa = [1, 2, 3, 4];  let [first, secound, ...rest]; console.log(first, secound, rest);

function myFunc(array) {
    let evenArray = [];

    for (let index = 0; index < array.length; index++) {
        if (index % 2 == 0) {
            evenArray.push(Number(array[index]));
        }
    }

    console.log(evenArray.join(' '));
}

let arr = ['20', '30', '40', '50', '60'];
let arr2 = ['5', '10']
myFunc(arr);
