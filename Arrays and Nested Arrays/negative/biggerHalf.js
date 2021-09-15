

function getBiggerHalfFromArray(array){

    // let result = [];
    // array.sort( (a,b) => b-a);

    // for (let index = 0; index < Math.ceil(array.length / 2); index++) {
    //     result.unshift(array[index]);
    // }

    // console.log(result);

    return array.sort((a,b) => b-a).slice(0,Math.ceil(array.length/2)).reverse();
}

getBiggerHalfFromArray([4, 7, 2, 5]);
getBiggerHalfFromArray([3, 19, 14, 7, 2, 19, 6]);