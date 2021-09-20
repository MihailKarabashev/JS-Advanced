function showText() {

    let spanElemenet = document.getElementById('text');
    let button = document.getElementById('more');

     if (spanElemenet.style.display == 'none') {
         spanElemenet.style.display = 'inline';
         button.style.display = 'none';
     }
}