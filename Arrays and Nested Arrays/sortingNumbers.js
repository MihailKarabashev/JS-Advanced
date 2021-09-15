function sortNumbers(array){
     let result = [];

     let myArray = array.sort( (a,b) => a-b);

    while (myArray.length !== 0) {
        let min = myArray.shift();
        let max = myArray.pop();
    
        result.push(min, max);
    }

  return result;
}

sortNumbers([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]);