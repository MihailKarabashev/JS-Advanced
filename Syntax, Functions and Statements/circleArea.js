function calculateCircleArea(input){
 
    let result = typeof(input) == 'number'
     ? (Math.pow(input,2) * Math.PI).toFixed(2) :
      `We can not calculate the circle area, because we receive a ${typeof(input)}.` 
      console.log(result);
}

calculateCircleArea(5);
calculateCircleArea('name');