function getSmallestTwoNumbers(array){

    let output = array.sort((a,b) => a-b).slice(0,2).join(" ");
    console.log(output);
}

getSmallestTwoNumbers([30, 15, 50, 5]);
getSmallestTwoNumbers([3, 0, 10, 4, 7, 3]);