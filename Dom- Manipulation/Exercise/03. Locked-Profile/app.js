function lockedProfile() {
    let buttons = [...document.querySelectorAll('button')];


    buttons.forEach(button => {
      button.addEventListener('click', function(e){

         let myButton = e.target;

         let locked = e.target.parentElement.querySelector('input[value="lock"');

         let divElement = e.target.previousElementSibling;

         if(divElement.style.display === '' && locked.checked === false){
            divElement.style.display = 'block';
            myButton.textContent = 'Hide it';

        }else if(divElement.style.display === 'block' && locked.checked === false){
         divElement.style.display = '';
         myButton.textContent = 'Show more';
        }

      });
    });
}