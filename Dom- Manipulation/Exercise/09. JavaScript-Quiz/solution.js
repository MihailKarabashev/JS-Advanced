function solve() {
   let sections = [... document.querySelectorAll('#quizzie section')];
   let arr = ['onclick', 'JSON.stringify()', 'A programming API for HTML and XML documents'];
   let result = document.querySelector('#results li.results-inner > h1');
   result.style.dispay = 'block';
   result.textContent = 'SDSSSS';

   let rightAnswearCount = 0;

    for (let index = 0; index < sections.length - 1; index++) {

      sections[index].addEventListener('click', function(e){
        if (e.target.tagName == 'P' && e.target.classList.contains('answer-text')) {
            
          arr.includes(e.target.textContent) == true ? rightAnswearCount+=1 : rightAnswearCount;
          sections[index].classList.contains('hidden') ? sections[index].classList.remove('hidden') : sections[index].classList.add('hidden');
          sections[index+1].classList.contains('hidden') ? sections[index+1].classList.remove('hidden') : sections[index+1].classList.add('hidden');

          if (rightAnswearCount == 3) {
            
          }else{

          }
        }
     }
    )}
}
