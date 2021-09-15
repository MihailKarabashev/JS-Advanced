
function myFunc(array,startStr, endStr){
    // let startAsNumber = array.indexOf(startStr);
    // let endAsNumber = array.indexOf(endStr);
    // let myArray = array.slice(startAsNumber,endAsNumber+1);
    return array.slice(array.indexOf(startStr), array.indexOf(endStr)+1);
}

myFunc(['Pumpkin Pie',
'Key Lime Pie',
'Cherry Pie',
'Lemon Meringue Pie',
'Sugar Cream Pie'],
'Key Lime Pie',
'Lemon Meringue Pie');

myFunc(['Apple Crisp',
'Mississippi Mud Pie',
'Pot Pie',
'Steak and Cheese Pie',
'Butter Chicken Pie',
'Smoked Fish Pie'],
'Pot Pie',
'Smoked Fish Pie'
);