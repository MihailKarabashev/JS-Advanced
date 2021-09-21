function solve() {
   document.querySelector('#btnSend').addEventListener('click', onClick);

   function onClick () {
      let input = document.querySelector('#inputs textarea');

    let splittedArray = JSON.parse(input.value);
    let first= {};
    let secound = {};
    let averageSalary = 0;
    let bestSalary = 0;
    let workers = [];


    let arr = [];

    splittedArray.forEach(element  => {
       let pattern = /\W+/;
       let splitedArray = element.split(pattern);

       let arrLenght = splitedArray.length % 2 == 0 ? splitedArray.length / 2 : splitedArray.length-1 / 2;
       let restaurant = splitedArray[0];

       for (let index = 1; index < arrLenght; index+=2) {
          let name = splitedArray[index];
          let salary = splitedArray[index + 1];

          if (arr.some(x=> !x.includes(restaurant))) {
             arr.push({[restaurant] : [name,salary]});
          }
       }; 

      });

      console.log(arr);


      // for (let index = 0; index < arr.length; index++) {
         
     
      // }

    }
}