function sumNumbers(firstNum, secoundNum){
    let sum = 0;
    for (let index = Number(firstNum); index <= Number(secoundNum); index++) {
        sum+=index;
    }
    console.log(sum);
}

sumNumbers('1', '5' );
sumNumbers('-8', '20');