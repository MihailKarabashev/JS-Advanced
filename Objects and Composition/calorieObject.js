function compositeObject(array){
   let obj = {};
   
   array.forEach((element, index, arr) => {
       if (index % 2 != 0) {
           obj[arr[index-1]] = Number(element);
       }else{
          obj[element];
       }
   });
   
    console.log(obj);
}

compositeObject(['Yoghurt', '48', 'Rise', '138', 'Apple', '52']);
compositeObject(['Potato', '93', 'Skyr', '63', 'Cucumber', '18', 'Milk', '42']);