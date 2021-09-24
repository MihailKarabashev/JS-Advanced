function solve() {
   let divElement = document.querySelector('div.shopping-cart');
   let textArea = document.querySelector('textarea');
  let sum = 0;
  let arr = [];


   divElement.addEventListener('click', function(e){
      
    if (e.target.classList.contains('add-product')) {
      let money = Number(e.target.parentNode.nextElementSibling.textContent).toFixed(2);
      let name = e.target.parentNode.previousElementSibling.children[0].textContent;
      arr.push(name);
      sum+=Number(money);
      textArea.textContent+= `Added ${name} for ${money} to the cart.\n`;
    }else if(e.target.classList.contains('checkout')){
       arr.filter(unique);
      textArea.textContent+= `You bought ${arr.join(', ')} for ${sum.toFixed(2)}.`;
      [...document.querySelectorAll('button').forEach(x=> x.disabled = true)];
    }
   });
   
   const unique = (value, index, self) => {
      return self.indexOf(value) === index
    }
}