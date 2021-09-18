function createAssemblyLine(){
    
    const libraryFuncions = {
       hasClima,
       hasAudio,
       hasParktronic,
    };

    return libraryFuncions;


    function hasClima(obj){
        obj.temp = 21;
        obj.tempSettings = 21;
        obj.adjustTemp = adjustTempConstruct;

         function adjustTempConstruct(){
             if (obj.temp < obj.tempSettings) {
                 obj.temp+=1;
             }else if(obj.temp > obj.tempSettings){
                obj.temp-=1;
             }
         }
        
    }

    function hasAudio(obj){
       obj.currentTrack = {
           name : null,
           artist: null,
       };
       obj.nowPlaying = nowPlayingConstruct;


       function nowPlayingConstruct(){

        if (obj.currentTrack.name  &&  obj.currentTrack.artist) {
           console.log(`Now playing '${obj.currentTrack.name}' by ${obj.currentTrack.artist}`);
         }
       }
        
    }
    function hasParktronic(obj){
      obj.checkDistance = checkDistanceConstruct;
        
        function checkDistanceConstruct(distance){
            if (distance < 0.1) {
                console.log('Beep! Beep! Beep!');
              } else if (distance >= 0.1 && distance < 0.25) {
                console.log('Beep! Beep!');
              } else if (distance >= 0.25 && distance < 0.5) {
                console.log('Beep!');
              } else {
                console.log('');
              }
        }
    }
}

const assemblyLine = createAssemblyLine();

const myCar = {
    make : 'Toyota',
    model : 'Avensis',
};

//3
assemblyLine.hasParktronic(myCar);

myCar.checkDistance(0.4);
myCar.checkDistance(0.2); 



//1
assemblyLine.hasClima(myCar);

myCar.tempSettings = 18;
myCar.adjustTemp();

console.log(myCar.temp);

//2
assemblyLine.hasAudio(myCar);

myCar.currentTrack = {
    name : 'Never Gonna Give You Up',
    artist : 'Rick Astley'
};

myCar.nowPlaying();

//3
assemblyLine.hasParktronic(myCar);

myCar.checkDistance(0.4);
myCar.checkDistance(0.2); 


console.log(myCar);
