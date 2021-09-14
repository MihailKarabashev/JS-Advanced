function aggregateArray(array){
  let sum = array.reduce((prevValue,currentValue) => prevValue + currentValue);
  
  let inversedSum = 0;
  let sumAsString='';
   for (let index = 0; index < array.length; index++) {
       inversedSum+= 1/array[index];
       sumAsString+=String(array[index]);
   }

   console.log(sum + "\n" + inversedSum + "\n" + sumAsString + "\n" );
//    console.log(inversedSum);
//    console.log(sumAsString);
}

aggregateArray([2, 4, 8, 16]);