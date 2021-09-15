function printEveryNthElement(array, number){
    let result = [];
    result.push(array[0]);

    for (let index = number; index < array.length; index+=number) {
        result.push(array[index]);
    }
    return result;
}

printEveryNthElement(['5', 
'20', 
'31', 
'4', 
'20'], 
2
);

printEveryNthElement(['dsa',
'asd', 
'test', 
'tset'], 
2
);

printEveryNthElement(['1', 
'2',
'3', 
'4', 
'5'], 
6
);