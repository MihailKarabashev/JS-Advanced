function convertTownsToJson(array){
   let arr = [];

    array.forEach( (value,index) => {
        let mySplittedArray = value.split('|').map(x=> x.trim()).filter(x=> x!=='');
        let [town,latituteAsStr,longitudeAsStr] = mySplittedArray;
        let latitute = Number(Number(latituteAsStr).toFixed(2));
        let longitude = Number(Number(longitudeAsStr).toFixed(2));
        
        let  obj = {Town : '',Latitude : 0, Longitude : 0};
        obj.Town = town;
        obj.Latitude = latitute;
        obj.Longitude = longitude;
        if (index > 0) {
            
            arr.push(obj);
        }
    });
    console.log(JSON.stringify(arr));
}

// convertTownsToJson(['| Town | Latitude | Longitude |',
// '| Sofia | 42.696552 | 23.32601 |',
// '| Beijing | 39.913818 | 116.363625 |']);

convertTownsToJson([
   ' | Town | Latitude | Longitude |',
'| Veliko Turnovo | 43.0757 | 25.6172 |',
'| Monatevideo | 34.50 | 56.11 | '
]);