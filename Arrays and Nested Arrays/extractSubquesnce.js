
function extractIncreasingSubsquence(array){
  
    let currentElement = 0;

   return array.reduce((acc,element) => {

    if (currentElement <=  element) {
        currentElement = element;
        acc.push(currentElement);
    }

     return acc;
       
    },[]);
}
extractIncreasingSubsquence([1, 
    3, 
    8, 
    4, 
    10, 
    12, 
    3, 
    2, 
    24]
    );

 extractIncreasingSubsquence([1, 
        2, 
        3,
        4]
        );


console.log(extractIncreasingSubsquence([10,10,15]));


