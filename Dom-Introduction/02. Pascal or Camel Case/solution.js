function solve() {
  let text = document.querySelector('#text').value;
  let namingConvantion = document.querySelector('#naming-convention').value;
  let result = document.querySelector('#result');
  
   if (namingConvantion == "Camel Case") {
     text = camalize(text);
     
   }else if(namingConvantion == 'Pascal Case'){
      text = pascalize(text);
   }else{
      text = 'Error !';
   }

   result.textContent = text;

   


     function camalize(str) {
      return str.toLowerCase().replace(/[^a-zA-Z0-9]+(.)/g, (m, chr) => chr.toUpperCase())};

      function pascalize(s){ 
        return s.replace(/\w\S*/g, function(t) { return t.charAt(0).toUpperCase() + t.substr(1).toLowerCase(); }).split(' ').join('');}
}