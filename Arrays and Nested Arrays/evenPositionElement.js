
function getNumbersAtEvenPositions(array){
    console.log(array.filter( (value , index) => index % 2 == 0).join(" "));
}

getNumbersAtEvenPositions(['20', '30', '40', '50', '60']);
getNumbersAtEvenPositions(['5', '10']);