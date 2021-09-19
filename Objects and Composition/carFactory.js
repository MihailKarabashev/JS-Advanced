function createCar(obj){

   let engines = [
       {power : 90, volume:1800},
       {power : 120, volume:2400},
       {power : 200, volume:3500},
   ];

   let carriges = [
       {type: 'hatchback', color:''},
       {type: 'coupe', color:''}
   ];

   let engineObj = engines.find(x=> obj.power <= x.power);
   let carriageObj = carriges.find(x=> x.type.toLowerCase() == obj.carriage.toLowerCase());
   let wheelsize = obj.wheelsize % 2 == 0 ? obj.wheelsize -= 1 : obj.wheelsize;

   return  {
   'model' : obj.model,
   'engine' : {power : engineObj.power, volume : engineObj.volume},
   'carriage' : {type : carriageObj.type, color : obj.color},
   'wheels': [wheelsize,wheelsize,wheelsize,wheelsize],
  }
}


createCar({ model: 'VW Golf II',
power: 90,
color: 'blue',
carriage: 'hatchback',
wheelsize: 14 }
);


createCar({ model: 'Opel Vectra',
power: 110,
color: 'grey',
carriage: 'coupe',
wheelsize: 17 }
);


