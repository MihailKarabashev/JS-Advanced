function encodeAndDecodeMessages() {
   
    let main = document.querySelector('#main');

    main.addEventListener('click', function(e){
        let textAreas = e.currentTarget.querySelectorAll('div > textarea');
       
        if (e.target.textContent.startsWith('Encode')) {
           let encodeText = textAreas[0].value.split('')
           .map(x=> x.charCodeAt(0)+ 1)
           .map(getCharCode).join('');

           textAreas[0].value = '';
           textAreas[1].value = encodeText;
        }else{
          let decodeText = textAreas[1].value.split('')
          .map(x=>  x.charCodeAt(0) - 1)
          .map(getCharCode)
          .join('');

          textAreas[1].value = decodeText;
        }
    });

    function getCharCode(x){
        return  String.fromCharCode(x);
    }
}