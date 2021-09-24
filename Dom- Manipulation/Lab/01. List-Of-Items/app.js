function addItem() {
  let ulElement = document.querySelector('#items');
  let input = document.querySelector('input[type="text"]');
   
  let liElement = document.createElement('li');
  liElement.textContent = input.value;
  ulElement.appendChild(liElement);

  input.value = '';
}