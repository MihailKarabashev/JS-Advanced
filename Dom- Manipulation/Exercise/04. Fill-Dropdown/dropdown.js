function addItem() {

   let text = document.querySelector('#newItemText');
   let value = document.querySelector('#newItemValue');

   let selectElement = document.querySelector('#menu');

   let optionElement = document.createElement('option');
   optionElement.textContent = text.value + value.value;

   selectElement.appendChild(optionElement);

   text.value = '';
   value.value = '';
}