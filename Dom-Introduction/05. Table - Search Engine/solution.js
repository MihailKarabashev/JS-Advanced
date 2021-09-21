function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   function onClick() {
      
      let trElements = [...document.querySelectorAll('.container tbody tr')];
      let searchedField = document.querySelector('#searchField');

      trElements.filter(x=> x.classList.remove('select'));

       trElements.filter(x=> x.textContent.toLowerCase().includes(searchedField.value.toLowerCase()))
      .map(x=> x.classList.add('select'));

      searchedField.value = '';
   }
}