function sumTable() {
  
    let trElements = [...document.querySelectorAll('table tr')];
    let sum = document.getElementById('sum');
    let mySum = 0;

    for (let index = 1; index < trElements.length - 1; index++) {
        // let arr = trElements[index].textContent.split(' ',4).filter(x=> x!= '');
        // mySum+=Number(arr[1]);
        let cost = trElements[index].textContent.split(' ').filter(x=> x.includes('.')).map(x=> x).join();
        mySum+=Number(cost);
    }
    sum.textContent = mySum;
}