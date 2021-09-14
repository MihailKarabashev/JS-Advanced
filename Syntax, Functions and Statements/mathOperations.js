function calculateMathOperation(firstNum , secoundNum, symbol){
    let result;
    switch(symbol){
        case '+' : result = firstNum + secoundNum; break;
        case '-' : result = firstNum - secoundNum; break;
        case '*' : result = firstNum * secoundNum; break;
        case '/' : result = firstNum / secoundNum; break;
        case '%' : result = firstNum % secoundNum; break;
        case '**' : result = firstNum ** secoundNum; break;
    };

    console.log(result);
}

calculateMathOperation(5, 6, '+');
calculateMathOperation(3, 5.5, '*');