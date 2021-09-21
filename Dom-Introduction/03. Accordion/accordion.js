function toggle() {
    let button = document.querySelector('.button');
    let information = document.querySelector('#extra');

    if (button.textContent == 'More') {
        button.textContent = 'Less';
        information.style.display = 'block';
    }else{
      button.textContent = 'More';
      information.style.display = 'none';
    }
}