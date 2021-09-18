function createStudentsTable(jsonInput){
   let array = JSON.parse(jsonInput);
   let count = 0;
   let strBuilder = '<table> \n';
   
    array.forEach((obj) => {
       let arrayValues = Object.values(obj);

       strBuilder+='<tr>';
       
       if (count==0) {
           strBuilder+='<tr>';
           for (const key in obj) {
              strBuilder+=`<th>${key}</th>`
           }
           count++;
           strBuilder+='</tr> \n';
       }

       strBuilder+='\n';

       for (const value of arrayValues) {
           strBuilder+=`<td>${value}</td>`
       }

       strBuilder+='</tr>';
    });
    strBuilder+='</table> \n'
    console.log(strBuilder);


}


createStudentsTable(`[{"Name":"Stamat",
"Score":5.5},
{"Name":"Rumen",
"Score":6}]`
);