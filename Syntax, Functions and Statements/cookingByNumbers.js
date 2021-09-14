function cookingByNumber(...array){
    let number = Number(array[0]);
     for (let index = 1; index < array.length; index++) {
         
        switch (array[index]) {
            case 'chop': number/=2; break;
            case 'dice': number = Math.sqrt(number); break;
            case 'spice': number+=1; break;
            case 'bake': number*=3; break;
            case 'fillet': number = number - (number* 0.2) ;  break;
        }

        console.log(number);
     }
}


cookingByNumber('32', 'chop', 'chop', 'chop', 'chop', 'chop');
cookingByNumber('9', 'dice', 'spice', 'chop', 'bake', 'fillet');
