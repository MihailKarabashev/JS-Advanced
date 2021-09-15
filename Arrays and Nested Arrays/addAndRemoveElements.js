
function addAndRemoveElements(array){
 let count = 0;
 let result = [];

    for (let index = 0; index < array.length; index++) {
        count++;
        if (array[index].toLowerCase() === 'remove' && result.length === 0) {
             return 'Empty';
        }
        array[index].toLowerCase() == 'add' ? result.push(count) : result.pop();
    }

   return result.join('\n');
}

addAndRemoveElements(['add', 
'add', 
'add', 
'add']
);

addAndRemoveElements(['add', 
'add', 
'remove', 
'add', 
'add']
);

addAndRemoveElements(['remove', 
'remove', 
'remove']
);