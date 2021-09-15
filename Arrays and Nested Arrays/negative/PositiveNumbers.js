
function myFunc(array){
    let result = [];

    array.forEach(element => {

        if (element < 0 ) {
            result.unshift(element);
        }else{
            result.push(element);
        }
    })

    console.log(result.join('\n'));
}


myFunc([7, -2, 8, 9]);
myFunc([3, -2, 0, -1]);



