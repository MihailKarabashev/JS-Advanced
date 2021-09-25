function create(words) {
   let divContent = document.querySelector('#content');
   words.forEach(word => {
      let divElement = document.createElement('div');
      let paragrathElement = document.createElement('p');
      paragrathElement.textContent = word;
      paragrathElement.style.display = 'none';

      divElement.appendChild(paragrathElement);

      divContent.appendChild(divElement);
   });
   
   divContent.addEventListener('click', function(e){

      if (e.target.tagName == 'DIV') {
         e.target.children[0].style.display = 'block'
         console.log(e.target);
      }
   });

}