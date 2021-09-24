function deleteByEmail() {
    let input = document.querySelector('input[type="text"]');
    let result = document.querySelector('#result');
    let tdElements = [...document.querySelectorAll('#customers tbody > tr > td')]
    .filter((x,y) => y % 2 != 0);
    
    for (const tdElement of tdElements) {
        
        if (tdElement.textContent === input.value) {
            tdElement.parentNode.remove();
            result.textContent = 'Deleted.';
        }else{
            result.textContent = 'Not found.';
        }
    }
}