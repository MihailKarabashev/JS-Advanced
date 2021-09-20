function colorize() {
    let trElements = [...document.querySelectorAll('table tr')];
    
    for (let index = 1; index < trElements.length; index++) {
         if (index % 2 != 0 ) {
             trElements[index].style.backgroundColor = 'Teal';
         }        
    }
}