function herosRegister(array){
 
  let arr = [];

    array.forEach(value => {
        let myArr = value.split(' / ');
        let [name,levelAsString, ...itemsLeft] = myArr;

        let level = Number(levelAsString);
        let items = itemsLeft.map(x=> x.split(', '));

        let obj = { name,level,items}

         
        arr.push(JSON.stringify(obj));
    });

    console.log(arr);
}


herosRegister(['Isacc / 25 / Apple, GravityGun',
'Derek / 12 / BarrelVest, DestructionSword',
'Hes / 1 / Desolator, Sentinel, Antara']
);
