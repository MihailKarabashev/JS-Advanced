function printSquareOfStars(input=5){

    for (let index = 0; index < input; index++) {
        console.log('* '.repeat(input));
    }
}

printSquareOfStars(4);