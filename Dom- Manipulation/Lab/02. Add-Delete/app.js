function addItem() {
    let ulElement = document.querySelector('#items');
    let input = document.querySelector('input[type="text"]');


    let liElement = document.createElement('li');
    liElement.textContent = input.value;
    let aElement = document.createElement('a');
    aElement.href = '#';
    aElement.textContent = '[Delete]';
    liElement.appendChild(aElement);
    ulElement.appendChild(liElement);

   aElement.addEventListener('click', function(e){
       e.target.parentNode.remove();
   });

    input.value = '';
}