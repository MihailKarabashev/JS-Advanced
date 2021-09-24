function validate() {
    let emailInput = document.querySelector('#email');
    let pattern = /^[a-z0-9._-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;

    emailInput.addEventListener('change', function(e){
        pattern.test(e.target.value) == true ? e.target.classList.remove('error') : e.target.classList.add('error');
    });
}