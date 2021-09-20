function someFunc(obj){
   obj = {
      name: 'Ivan',
      rofl(){
          console.log('rofl');
      }
  }
  return obj;
}

let oo = {s:'Fffffff'};

let ss = someFunc(oo);

console.log(ss.s);


