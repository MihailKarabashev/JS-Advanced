function search() {
     let liElements =[... document.querySelectorAll('#towns li')];
     let input = document.querySelector('#searchText');
     let result = document.querySelector('#result');
  
     let count = 0;

     liElements.forEach(element => {
        if (element.textContent.startsWith(input.value)) {
           count++;
           element.style.textDecoration = 'underline';
           element.style.fontWeight = 'bold';
        }else{
         element.style.textDecoration = '';
         element.style.fontWeight = ''
        }
     });

     result.textContent = `${count} matches found`;
     input.value = '';
}
