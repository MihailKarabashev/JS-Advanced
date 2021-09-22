function generateReport() {
    const checks = document.querySelectorAll('input[type="checkbox"]'); // 0 -6
    const trElements = [...document.querySelectorAll('tbody>tr')]; // 0- 139
    let arr = [];

    trElements.forEach(trElement => {
        let obj = {};
        let tdElements = [...trElement.children];

        tdElements.forEach((tdElement,i) => {
            if (checks[i].checked) {
                Object.assign(obj,{[checks[i].name]: tdElement.textContent});
            }
        });
        arr.push(obj);
    });


    document.querySelector('#output').textContent =  JSON.stringify(arr,null,2);   
}