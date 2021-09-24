function focused() {
     let divElement =  document.querySelector('div');

     divElement.addEventListener('mouseover', function(e){
        if (e.target.tagName === 'INPUT') {
            e.target.parentElement.classList.add('focused');
        }
     });

     divElement.addEventListener('mouseout', function(e){
        if (e.target.tagName === 'INPUT') {
            e.target.parentElement.classList.remove('focused');
        }
     });
}