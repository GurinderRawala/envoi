
const Calculator = (Ad1, Ad2) =>{
    const R = 6371e3; // metres
    const φ1 = Ad1.Latitude * Math.PI/180; // φ, λ in radians
    const φ2 = Ad2.Latitude * Math.PI/180;
    const Δφ = (Ad2.Latitude - Ad1.Latitude) * Math.PI/180;
    const Δλ = (Ad2.Longitude - Ad1.Longitude) * Math.PI/180;

    const a = Math.sin(Δφ/2) * Math.sin(Δφ/2) +
              Math.cos(φ1) * Math.cos(φ2) *
              Math.sin(Δλ/2) * Math.sin(Δλ/2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));

    const d = ((R * c)/1000).toFixed(2); // in km

    return parseInt(d);
}


export default (Data) =>{
    let Arranged = [Data[0]];
    const Length =  Data.length;
    let distance = [];
    let Reducing =[...Data];
    
    while(Arranged.length !== Length){

        for(let x in Reducing){
            //Calculate distance for each address
            distance.push(Calculator(Arranged[Arranged.length - 1], Reducing[x]))

        }
        //Finding minimum distance
        let dd = distance.filter((item) => item !== 0)
        let min = Math.min.apply(null, dd);

        let index = distance.indexOf(min);
        Arranged.push(Reducing[index]);

        //Exclude the address
        Reducing.splice(index, 1)

        distance = []
         
    }

   return Arranged.filter((item, pos) => Arranged.indexOf(item) === pos);
}